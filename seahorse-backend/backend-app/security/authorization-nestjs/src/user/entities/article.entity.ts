import { AutoMap } from "@automapper/classes";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ArticleEntity extends BaseEntity{

    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

    @AutoMap()
    @Column()
    isPublished: boolean;

    @AutoMap()
    @Column()
    authorId: number;
}