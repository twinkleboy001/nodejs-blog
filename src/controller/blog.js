const getList = (author, keyword) => {
  // 先返回假数据（格式是正确的）
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1670835089567,
      author: "zhangsan",
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: 1670835157608,
      author: "lisi",
    },
  ];
};

const getDetail = (id) => {
  return {
    id: 1,
    title: "标题A",
    content: "内容A",
    createTime: 1670835089567,
    author: "zhangsan",
  };
};

const newBlog = (blogData = {}) => {
  // blogData是一个博客对象，包含 title content 属性
  return {
    id: 3, // 表示新建博客，插入到数据表里面的 id
  };
};

module.exports = {
  getList,
  getDetail,
  newBlog,
};
