import { Injectable } from "@nestjs/common";
import { UserEntity } from "../../user/entities/user.entity";
import { Ability, AbilityBuilder, AbilityClass, InferSubjects, ExtractSubjectType } from "@casl/ability";
import { Action } from "../../user/enum/actionArticle.enum";
import { ArticleEntity } from "../../user/entities/article.entity";


type Subjects = InferSubjects<typeof ArticleEntity | typeof UserEntity> | 'all';
export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {

    createForUser(user: UserEntity) {
        // Obtain the can, cannot y build
        // can: grants permissions to perform a specific action on a given subject (resource).
        // cannot: denies a specific permission to perform an action on a given subject.
        // build: builds the authorization ability once all permission rules have been defined with can and cannot
        const { can, cannot, build } = new AbilityBuilder<
            Ability<[Action, Subjects]>
        >(Ability as AbilityClass<AppAbility>);

        // If the user is admin, is given the Manage permission for all resources
        if (user.isAdmin) {
            can(Action.Manage, 'all')
        } else {
            can(Action.Read, 'all')
            // We explain why cannot create the user
            cannot(Action.Create, UserEntity).because(
                '(Error from ability) Only admins'
            )
        }
        // Update permission is granted for resources of type Article where the authorId matches the user id.
        can(Action.Update, ArticleEntity, { authorId: user.id })
        // Read permission is denied for all resources.
        cannot(Action.Read, 'all')
        // The authorization skill is built with the defined rules
        return build({
            // Function to detect the type of subject in the authorization rules 
            detectSubjectType: (item) =>
                item.constructor as ExtractSubjectType<Subjects>,
        })
    }

}

