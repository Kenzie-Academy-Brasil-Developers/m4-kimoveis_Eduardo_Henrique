import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifyTypeSoldInRealEstateDefaultValueFalse1683910194612 implements MigrationInterface {
    name = 'ModifyTypeSoldInRealEstateDefaultValueFalse1683910194612'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "sold"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "sold" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "sold"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "sold" character varying NOT NULL`);
    }

}
