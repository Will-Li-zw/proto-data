# proto-data

> belongs Aiux 开源工具库

## 定义和用途
通过设计模板原型，来定义表单数据格式，完成数据收集与格式化，并批量按照模板生成对应卡片的低代码工具。可用于定制化数据的视觉卡片自动生成。

![proto-data](https://user-images.githubusercontent.com/17036920/114829301-7929c780-9dfd-11eb-9879-8fe1c9d35eb3.jpg)


## 开发

### React + Vite + Material UI + react-jss
采用了下一代的前端打包工具 Vite 进行打包。在其中使用了 Css in Js 的方式来设置可变样式。

### TDD
在看板中分解并定义用户故事，采用了 jest + @testing-library/react 进行 React 中的 TDD 方式开发。测试即文档。

### Devops
采用 Github action + Github page 自动部署

### 进度
参见 https://github.com/AiuxDesign/proto-data/projects/1

### TODO
- 模板持久化
- 模板导出 project，并持久化（模板+表单数据）
- 表单分享
- 导入 numbers/excel 表格，并处理图片
