/*
  Warnings:

  - You are about to drop the column `aantal_bars` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `aantal_gasten` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `aantal_medewerkers` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `aantal_tafels` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "aantal_bars",
DROP COLUMN "aantal_gasten",
DROP COLUMN "aantal_medewerkers",
DROP COLUMN "aantal_tafels";
