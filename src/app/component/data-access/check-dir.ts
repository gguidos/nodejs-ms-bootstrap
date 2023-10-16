export default function makeCheckDir({ access, mkdir, logger}) {
  return Object.freeze({ checkDir })
  async function checkDir({ fileDirPath, fileDirName }){
    try {
      logger.info(`[DATA-ACCESS][CHECK-DIR] Checking if ${fileDirName} exists`);
      await access(fileDirPath);
      logger.info(`[DATA-ACCESS][CHECK-DIR] ${fileDirName} exists`);
      return;
    } catch {
      logger.info(`[DATA-ACCESS][CHECK-DIR] Creating ${fileDirName}`);
      await mkdir(fileDirPath);
      logger.info(`[DATA-ACCESS][CHECK-DIR] ${fileDirName} created`);
      return;
    }
  }
}