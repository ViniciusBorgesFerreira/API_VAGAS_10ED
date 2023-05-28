import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AlterTableUsersAddColumnCompany1683158779757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "company",
                type: "varchar",
                length: "100",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'company');
    }

}
