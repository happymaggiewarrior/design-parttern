import logger from "./FancyLogger";

export default function logSecond() {
  logger.printOutCount();
  logger.log("second log");
  logger.printOutCount();
}
