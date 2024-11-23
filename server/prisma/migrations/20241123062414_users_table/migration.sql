/*
  Warnings:

  - You are about to drop the `chat_groups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `chats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `group_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "chat_groups" DROP CONSTRAINT "chat_groups_user_id_fkey";

-- DropForeignKey
ALTER TABLE "chats" DROP CONSTRAINT "chats_group_id_fkey";

-- DropForeignKey
ALTER TABLE "group_users" DROP CONSTRAINT "group_users_group_id_fkey";

-- DropTable
DROP TABLE "chat_groups";

-- DropTable
DROP TABLE "chats";

-- DropTable
DROP TABLE "group_users";
