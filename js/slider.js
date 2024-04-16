$(document).ready(function(){
	// $('.your-class').slick({
	//   setting-name: setting-value
	// });
	// ()の中はクラス名を入れる
	$(".slider").slick({
		// ドットを出す
		dots:true ,
		// 自動再生
		autoplay :true ,
		// 無限再生(デフォルトはfalseなのでtrueにする必要がある！！)
		infinite: true ,
		autoplay :2000   
	});
  });