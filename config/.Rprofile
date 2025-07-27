# init .vsc.*
if (interactive() && Sys.getenv("RSTUDIO") == "") {
  source(file.path(Sys.getenv(if (.Platform$OS.type == "windows") "USERPROFILE" else "HOME"), ".vscode-R", "init.R"))
}

# use httpggd to view
if (interactive() && Sys.getenv("TERM_PROGRAM") == "vscode") {
  if ("httpgd" %in% .packages(all.available = TRUE)) {
    options(vsc.plot = FALSE)
    options(device = function(...) {
      httpgd::hgd(silent = TRUE)
      .vsc.browser(httpgd::hgd_url(history = FALSE), viewer = "Beside")
    })
  }
}

# rstudio package manager
if (.Platform$OS.type != "windows") {
  options(repos = c(REPO_NAME = "https://packagemanager.rstudio.com/cran/latest"))
  options(BioC_mirror = "https://packagemanager.rstudio.com/bioconductor")
}

# for chinese users in windows
options(encoding = "UTF-8")

local({
  r <- getOption("repos")
  r["CRAN"] <- "https://mirrors.tuna.tsinghua.edu.cn/CRAN/"
  r["CRAN2"] <- "https://mirrors.ustc.edu.cn/CRAN/"
  options(repos = r)
})

if (.Platform$OS.type == "windows") {
  invisible(suppressWarnings(
    try(Sys.setlocale(category = "LC_ALL", locale = "Chinese-simplified.UTF-8"), silent = TRUE)
  ))
}

message(".Rprofile loaded:")
message("1. Default encoding set to UTF-8, locale set  to Chinese-simplified.UTF-8 on Windows.")
message("2. CRAN mirror set to Tsinghua University mirror.")
