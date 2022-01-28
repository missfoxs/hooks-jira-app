import { useEffect, useState } from "react";

export const isFalsy = (value) =>
  value === 0 || value === false ? true : !!value;

///
/// 什么时候用函数，什么时候用hook呢？简单区分就是函数中需要使用别的hook（useState等）
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (!isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

// 在这里使用Hook的原因
// value和debounceValue之间有个转换，这个转换需要借助react状态（响应式的，值改变的时候页面改变或做一些操作）
export const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    /* 在上一个useEffect处理完后运行，因此只会留下最后一个定时器 */
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
