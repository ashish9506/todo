module.exports = {
  async up(migration) {
    await migration.sequelize.query(
      'CREATE TABLE IF NOT EXISTS `Todo` (`id` CHAR(36) BINARY NOT NULL , `todo` VARCHAR(255) NOT NULL, `done` TINYINT(1) DEFAULT false, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;'
    );
  }
};
