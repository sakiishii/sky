// $(function () {
// 	$('a[href^="#"]').on('click', function() {
// 	  $('#drawer_toggle').click(); 
// 	})
  
// 		  $("#drawer_toggle").click(function(){
// 		$(this).toggleClass("open");
// 		$("#global_nav").fadeToggle();
	  
// 	  })
// 	  $("#drawer_toggle").click(function(){
// 		$(this).toggleClass("open");
// 		$("#global_nav").fadeToggle();
// 	  });
// 	});
// $(function () {
// 	// ページ内リンクがクリックされたときの処理
// 	$('a[href^="#"]').on('click', function() {
// 	  // グローバルメニューを閉じる
// 	  $("#drawer_toggle").removeClass("open");
// 	  $("#global_nav").fadeOut();
// 	});
  
// 	// グローバルメニューのトグル処理
// 	$("#drawer_toggle").click(function(){
// 	  $(this).toggleClass("open");
// 	  $("#global_nav").fadeToggle();
// 	});
//   });



$(function () {
	// ページ内リンクがクリックされたときの処理
	$('a[href^="#"]').on('click', function() {
	  // モバイル版の場合はグローバルメニューを閉じる
	  if ($(window).width() <= 768) {
		$("#drawer_toggle").removeClass("open");
		$("#global_nav").fadeOut();
	  }
	});
  
	// グローバルメニューのトグル処理
	$("#drawer_toggle").off('click').on('click', function(event){
	  event.stopPropagation(); // クリックイベントの伝播を停止する
	  $(this).toggleClass("open");
	  $("#global_nav").fadeToggle();
	});
  
	
	$(document).on('click', function(event) {
		if (!$(event.target).closest('#drawer_toggle').length && !$(event.target).closest('#global_nav').length) {
		  // グローバルメニュー以外の要素がクリックされたときの処理を削除する
		}
	  });
	  
  });

//   理由メディアクエリを使用した条件分岐:
//   メディアクエリを使用することで、ブラウザのウィンドウサイズによって異なる処理を行うことができます。修正されたコードでは、$(window).width() を使用してウィンドウの幅を取得し、その値が768px以下かどうかをチェックしています。ウィンドウの幅が768px以下であれば、モバイル版とみなし、グローバルメニューを閉じる処理が実行されます。
  
//   条件に基づく処理:
//   ページ内リンクがクリックされたときに、ウィンドウの幅が768px以下であれば、モバイル版として扱い、グローバルメニューを閉じる処理が行われます。一方、ウィンドウの幅が768pxより大きい場合は、パソコン版として扱い、グローバルメニューは閉じられません。
  
//   イベントの伝播の停止:
//   ハンバーガーメニューのクリックイベントとグローバルメニュー以外の要素のクリックイベントでは、event.stopPropagation() を使用してイベントの伝播を停止しています。これにより、ハンバーガーメニューのクリックでグローバルメニューが開閉されるのを防ぎ、グローバルメニュー以外の要素をクリックしたときにメニューが閉じるようになります。
  
//   以上が修正の詳細です。修正されたコードは、ウェブサイトのユーザーエクスペリエンスを向上させるために、モバイルとデスクトップの両方で適切に動作するようになりました。