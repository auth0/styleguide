import { execSync } from "child_process";

function openBrowser(url) {
  if (process.platform === "darwin") {
    try {
      // http://superuser.com/a/640718
      execSync(`open ${url}`);
      return true;
    } catch (err) {
      // Ignore errors.
      return false;
    }
  }

  return false;
}

export default openBrowser;
