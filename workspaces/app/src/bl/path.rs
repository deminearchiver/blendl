use std::path::PathBuf;

use tauri::{AppHandle, Runtime, Manager, path::PathResolver};

type PathResult<T> = tauri::path::Result<T>;
type PathError = tauri::path::Error;

pub trait PathResolverExt<R: Runtime> {
  fn bl_config_dir(&self) -> PathResult<PathBuf>;
}

impl<R: Runtime> PathResolverExt<R> for PathResolver<R> {
  fn bl_config_dir(&self) -> PathResult<PathBuf> {
    self.app_config_dir()
  }
}
