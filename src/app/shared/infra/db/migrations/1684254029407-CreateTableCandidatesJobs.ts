import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateTableCandidatesJobs1684254029407 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "candidate_jobs",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "id_job",
                        type: "uuid",
                    },
                    {
                        name: "id_candidate",
                        type: "uuid",
                    },
                    {
                        name: "status",
                        type: "varchar",
                        length: "50",
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
                foreignKeys: [
                    new TableForeignKey({
                        columnNames: ["id_job"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "jobs",
                        name: "fk_candidates_jobs",
                        onDelete: "CASCADE",
                    }),
                    new TableForeignKey({
                        columnNames: ["id_candidate"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "users",
                        name: "fk_candidates_jobs_users",
                        onDelete: "CASCADE",
                    }),
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("candidate_jobs", true, true, true);
    }
}


