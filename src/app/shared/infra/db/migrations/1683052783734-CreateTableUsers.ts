import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableUsers1683052783734 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "50",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "80",
                        isUnique: true,
                    },
                    {
                        name: "profile",
                        type: "varchar",
                        length: "15",
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "100",
                    },
                    {
                        name: "company",
                        type: "varchar",
                        length: "100",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                    },
                ],
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users', true, true, true);
    }

}
