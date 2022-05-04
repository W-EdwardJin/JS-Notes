const interval = 1; // 执行右移周期

/** 
 * div 动画函数
 * @obj: 移动对象
 * @style: 变换样式
 * @speed: 移动速度
 * @end: 移动位置
*/
function move(obj, style, speed, end, callback) {
  // 清除现有定时器
  clearInterval(obj.timer);
  // 获取实际移动方向
  const start = getStyle(obj, style);
  speed = (start < end) ? speed : -speed;
  // 控制 box1 向右移动
  // 开启一个定时器，用来执行动画效果
  obj.timer = setInterval(() => { 
    // 获取 box 原始 left 值
    const oriValue = getStyle(obj, style);
    const newValue = oriValue + speed;
    // 判断 left 值是否超过超过终点
    if ((newValue > end && speed >= 0) || (newValue < end && speed < 0)) {
      obj.style[style] = `${end}px`;
      clearInterval(obj.timer);
      callback && callback();
    } else {
      obj.style[style] = `${newValue}px`;
    }
  }, interval);
}

/** 
 * 获取元素的指定样式值 
 * params
 * @obj: 获取样式的元素
 * @style: 样式名
 * return: {number} 样式值z
*/
function getStyle(obj, style) {
  const data = getComputedStyle(obj, null)[style];
  const res = parseInt(data, 10);
  return res;
}

/**
 * 更新轮播图锚点样式
 * params
 * @arr: 需更新的元素数组
 * @index: 当前选中的锚点
 */
function updateNav(arr, index) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].style.backgroundColor = i === index ? 'blue' : 'blueviolet';
  }
}


