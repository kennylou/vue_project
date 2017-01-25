/**
 * 过滤器表
 * Created by ChaoLeer on 17/1/25. 
 */
const filter = {
	"numspa": null,
	"trim": null
}
 
/**
 * 千位分隔符，默认使用逗号','分隔
 * @param  {[type]} value  [传入参数]
 * @param  {[type]} splite [分隔符号，可选，默认为逗号',']
 * @return {[type]}        [返回处理后数据]
 */
filter.numspa = (value,div) => {
	div = div || ",";
    return value.toString().replace(/\B(?=(\d{3})+$)/g,div); 
} 
 
/**
 * 去除首尾空格
 * @param  {[string]} string [字符串]
 * @return {[string]}        [返回处理后数据]
 */
filter.trim = (string) => {
	return string.toString().replace();
} 


export default filter