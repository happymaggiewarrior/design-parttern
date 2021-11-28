import logger from "./FancyLogger";

export default function logFirst() {
  logger.printOutCount();
  logger.log("first log");
  logger.printOutCount();
}
