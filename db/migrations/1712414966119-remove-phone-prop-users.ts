import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovePhonePropUsers1712414966119 implements MigrationInterface {
    name = 'RemovePhonePropUsers1712414966119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying NOT NULL`);
    }

}
