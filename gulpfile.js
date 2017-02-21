var requireDir = require('require-dir');

// 递归导入 gulp/tasks 目录下的所有构建方法, 包括子文件夹
requireDir('./gulp/tasks', { recurse: true });
