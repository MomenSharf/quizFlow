/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quiz" ALTER COLUMN "editorState" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "imageId" TEXT,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Image_key_key" ON "Image"("key");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
