/*!
* jquery.qtip. The jQuery tooltip plugin
*
* Copyright (c) 2009 Craig Thompson
* http://craigsworks.com
*
* Licensed under MIT
* http://www.opensource.org/licenses/mit-license.php
*
* Launch  : February 2009
* Version : 1.0.0-rc3
* Released: Tuesday 12th May, 2009 - 00:00
* Debug: jquery.qtip.debug.js
*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('"6p 6q";(h($){$(3y).3Q(h(){$.19.f.1r={2S:{2j:{P:$(1q).3J(),L:$(1q).3N()},k:$(1q).k(),E:$(1q).E()}};T 4r,i;$(1q).1G(\'3D 2j\',h(p){25(4r);4r=3L(h(){c(p.14===\'2j\'){$.19.f.1r.2S.2j={P:$(1q).3J(),L:$(1q).3N()}}C{$.19.f.1r.2S.k=$(1q).k();$.19.f.1r.2S.E=$(1q).E()}24(i=0;i<$.19.f.M.Q;i++){T V=$.19.f.M[i];c(V&&V.U&&V.U.1f===H&&V.8.q.14!==\'2c\'&&(V.8.q.1V.2j&&p.14===\'2j\'||V.8.q.1V.3D&&p.14===\'3D\')){V.28(p,H)}}},46)});$(3y).1G(\'5p.f\',h(p){c($(p.s).5z(\'Y.f\').Q===0){$(\'.f[3p]\').1I(h(){T V=$(A).f(\'V\');c($(A).30(\':2y\')&&V&&V.U&&!V.U.1Y&&$(p.s).2k(V.d.s).Q>1){V.B(p)}})}})});h 2x(u){c(!u){D o}A.x=5s(u).2C(/5h/i,\'1t\').5g(/P|1Q|1t/i)[0].2z();A.y=5s(u).2C(/5h/i,\'1t\').5g(/L|1K|1t/i)[0].2z();A.1o={P:0,L:0};A.2F=(u.2B(0).6r(/^(t|b)/)>-1)?\'y\':\'x\';A.1m=h(){D(A.2F===\'y\')?A.y+A.x:A.x+A.y}}h 4f(u,k,E){T 1R={5e:[[0,0],[k,E],[k,0]],5k:[[0,0],[k,0],[0,E]],5q:[[0,E],[k,0],[k,E]],5n:[[0,0],[0,E],[k,E]],6s:[[0,E],[k/2,0],[k,E]],6o:[[0,0],[k,0],[k/2,E]],6n:[[0,0],[k,E/2],[0,E]],6j:[[k,0],[k,E],[0,E/2]]};1R.6i=1R.5e;1R.6k=1R.5k;1R.6l=1R.5q;1R.6m=1R.5n;D 1R[u]}h 4b(F){T 2l;c($(\'<1c />\').1n(0).1A){2l={3I:[F,F],4d:[0,F],47:[F,0],3C:[0,0]}}C c($.12.1d){2l={3I:[-2G,2G,0],4d:[-2G,2G,-F],47:[2G,63,0],3C:[2G,63,-F]}}D 2l}h 2P(e,4F){T 2H,i;2H=$.2t(H,{},e);24(i 4I 2H){c(4F===H&&(/(g|1e)/i).26(i)){3i 2H[i]}C c(!4F&&(/(k|J|g|R|1e|4x)/i).26(i)){3i 2H[i]}}D 2H}h 4p(e){c(N e.g!==\'1a\'){e.g={u:e.g}}c(N e.g.O!==\'1a\'){e.g.O={k:e.g.O,E:e.g.O}}c(N e.J!==\'1a\'){e.J={k:e.J}}c(N e.k!==\'1a\'){e.k={2X:e.k}}c(N e.k.1J===\'1m\'){e.k.1J=1x(e.k.1J.2C(/([0-9]+)/i,"$1"),10)}c(N e.k.2f===\'1m\'){e.k.2f=1x(e.k.2f.2C(/([0-9]+)/i,"$1"),10)}c(N e.g.O.x===\'2h\'){e.g.O.k=e.g.O.x;3i e.g.O.x}c(N e.g.O.y===\'2h\'){e.g.O.E=e.g.O.y;3i e.g.O.y}D e}h 4q(){T 7,i,3F,2s,1D,1N;7=A;3F=[H,{}];24(i=0;i<3U.Q;i++){3F.5c(3U[i])}2s=[$.2t.64($,3F)];5i(N 2s[0].1X===\'1m\'){2s.66(4p($.19.f.2Y[2s[0].1X]))}2s.66(H,{1e:{j:\'f-\'+(3U[0].1X||\'2U\')}},$.19.f.2Y.2U);1D=$.2t.64($,2s);1N=($.12.1d)?1:0;1D.g.O.k+=1N;1D.g.O.E+=1N;c(1D.g.O.k%2>0){1D.g.O.k+=1}c(1D.g.O.E%2>0){1D.g.O.E+=1}c(1D.g.u===H){c(7.8.q.u.j===\'1t\'&&7.8.q.u.s===\'1t\'){1D.g.u=o}C{1D.g.u=7.8.q.u.j}}D 1D}h 4g(1c,W,F,I){T 1i=1c.1n(0).1A(\'2d\');1i.4L=I;1i.5a();1i.3v(W[0],W[1],F,0,1l.6u*2,o);1i.5b()}h 4Y(){T 7,i,k,F,I,W,1O,O,4e,2i,36,2W,3Z,42,43;7=A;7.d.1u.1L(\'.f-2W, .f-36\').3l();k=7.8.e.J.k;F=7.8.e.J.F;I=7.8.e.J.I||7.8.e.g.I;W=4b(F);1O={};24(i 4I W){1O[i]=\'<Y 1T="\'+i+\'" e="\'+((/6C/).26(i)?\'P\':\'1Q\')+\':0; \'+\'q:3c; E:\'+F+\'18; k:\'+F+\'18; 2n:1B; 2E-E:0.1E; 39-O:1E">\';c($(\'<1c />\').1n(0).1A){1O[i]+=\'<1c E="\'+F+\'" k="\'+F+\'" e="4t-3t: L"></1c>\'}C c($.12.1d){O=F*2+3;1O[i]+=\'<v:3v 55="o" 3f="\'+I+\'" 6D="\'+W[i][0]+\'" 6E="\'+W[i][1]+\'" \'+\'e="k:\'+O+\'18; E:\'+O+\'18; 2r-L:\'+((/1K/).26(i)?-2:-1)+\'18; \'+\'2r-P:\'+((/6h/).26(i)?W[i][2]-3.5:-1)+\'18; \'+\'4t-3t:L; 2a:4V-48; 3E:1v(#2I#3q)"></v:3v>\'}1O[i]+=\'</Y>\'}4e=7.32().k-(1l.1J(k,F)*2);2i=\'<Y 1H="f-2i" e="E:\'+F+\'18; k:\'+4e+\'18; \'+\'2n:1B; 1j-I:\'+I+\'; 2E-E:0.1E; 39-O:1E;">\';36=\'<Y 1H="f-36" 4A="4h" e="E:\'+F+\'18; \'+\'2r-P:\'+F+\'18; 2E-E:0.1E; 39-O:1E; 2w:0;">\'+1O.3I+1O.4d+2i;7.d.1u.3g(36);2W=\'<Y 1H="f-2W" 4A="4h" e="E:\'+F+\'18; \'+\'2r-P:\'+F+\'18; 2E-E:0.1E; 39-O:1E; 2w:0;">\'+1O.47+1O.3C+2i;7.d.1u.5Q(2W);c($(\'<1c />\').1n(0).1A){7.d.1u.1L(\'1c\').1I(h(){3Z=W[$(A).3d(\'[1T]:1M\').16(\'1T\')];4g.S(7,$(A),3Z,F,I)})}C c($.12.1d){7.d.j.5Q(\'<v:3G e="3E:1v(#2I#3q);"></v:3G>\')}42=1l.1J(F,(F+(k-F)));43=1l.1J(k-F,0);7.d.1z.G({J:\'6B 3K \'+I,6A:43+\'18 \'+42+\'18\'})}h 4c(1c,W,I){T 1i=1c.1n(0).1A(\'2d\');1i.4L=I;1i.5a();1i.6w(W[0][0],W[0][1]);1i.53(W[1][0],W[1][1]);1i.53(W[2][0],W[2][1]);1i.5b()}h 3T(u){T 7,1N,1U,3W,4o,3w;7=A;c(7.8.e.g.u===o||!7.d.g){D}c(!u){u=2L 2x(7.d.g.16(\'1T\'))}1N=1U=($.12.1d)?1:0;7.d.g.G(u[u.2F],0);c(u.2F===\'y\'){c($.12.1d){c(1x($.12.3a.2B(0),10)===6){1U=u.y===\'L\'?-3:1}C{1U=u.y===\'L\'?1:2}}c(u.x===\'1t\'){7.d.g.G({P:\'50%\',6v:-(7.8.e.g.O.k/2)})}C c(u.x===\'P\'){7.d.g.G({P:7.8.e.J.F-1N})}C{7.d.g.G({1Q:7.8.e.J.F+1N})}c(u.y===\'L\'){7.d.g.G({L:-1U})}C{7.d.g.G({1K:1U})}}C{c($.12.1d){1U=(1x($.12.3a.2B(0),10)===6)?1:(u.x===\'P\'?1:2)}c(u.y===\'1t\'){7.d.g.G({L:\'50%\',44:-(7.8.e.g.O.E/2)})}C c(u.y===\'L\'){7.d.g.G({L:7.8.e.J.F-1N})}C{7.d.g.G({1K:7.8.e.J.F+1N})}c(u.x===\'P\'){7.d.g.G({P:-1U})}C{7.d.g.G({1Q:1U})}}3W=\'2w-\'+u[u.2F];4o=7.8.e.g.O[u.2F===\'x\'?\'k\':\'E\'];7.d.j.G(\'2w\',0).G(3W,4o);c($.12.1d&&1x($.12.3a.2B(0),6)===6){3w=1x(7.d.g.G(\'2r-L\'),10)||0;3w+=1x(7.d.w.G(\'2r-L\'),10)||0;7.d.g.G({44:3w})}}h 41(u){T 7,I,W,3B,2p,g;7=A;c(7.d.g!==1w){7.d.g.3l()}I=7.8.e.g.I||7.8.e.J.I;c(7.8.e.g.u===o){D}C c(!u){u=2L 2x(7.8.e.g.u)}W=4f(u.1m(),7.8.e.g.O.k,7.8.e.g.O.E);7.d.g=\'<Y 1H="\'+7.8.e.1e.g+\'" 4A="4h" 1T="\'+u.1m()+\'" e="q:3c; \'+\'E:\'+7.8.e.g.O.E+\'18; k:\'+7.8.e.g.O.k+\'18; \'+\'2r:0 5T; 2E-E:0.1E; 39-O:1E;"></Y>\';7.d.j.3g(7.d.g);c($(\'<1c />\').1n(0).1A){g=\'<1c E="\'+7.8.e.g.O.E+\'" k="\'+7.8.e.g.O.k+\'"></1c>\'}C c($.12.1d){3B=7.8.e.g.O.k+\',\'+7.8.e.g.O.E;2p=\'m\'+W[0][0]+\',\'+W[0][1];2p+=\' l\'+W[1][0]+\',\'+W[1][1];2p+=\' \'+W[2][0]+\',\'+W[2][1];2p+=\' 6z\';g=\'<v:3h 3f="\'+I+\'" 55="o" 6G="H" 2p="\'+2p+\'" 3B="\'+3B+\'" \'+\'e="k:\'+7.8.e.g.O.k+\'18; E:\'+7.8.e.g.O.E+\'18; \'+\'2E-E:0.1E; 2a:4V-48; 3E:1v(#2I#3q); \'+\'4t-3t:\'+(u.y===\'L\'?\'1K\':\'L\')+\'"></v:3h>\';g+=\'<v:3G e="3E:1v(#2I#3q);"></v:3G>\';7.d.1z.G(\'q\',\'4a\')}7.d.g=7.d.j.1L(\'.\'+7.8.e.1e.g).6g(0);7.d.g.2g(g);c($(\'<1c  />\').1n(0).1A){4c.S(7,7.d.g.1L(\'1c:1M\'),W,I)}c(u.y===\'L\'&&$.12.1d&&1x($.12.3a.2B(0),10)===6){7.d.g.G({44:-4})}3T.S(7,u)}h 5W(){T 7=A;c(7.d.R!==1w){7.d.R.3l()}7.d.j.16(\'3z-6f\',\'f-\'+7.11+\'-R\');7.d.R=$(\'<Y 11="f-\'+7.11+\'-R" 1H="\'+7.8.e.1e.R+\'"></Y>\').G(2P(7.8.e.R,H)).G({2e:($.12.1d)?1:0}).5K(7.d.1z);c(7.8.w.R.1s){7.60.S(7,7.8.w.R.1s)}c(7.8.w.R.1h!==o&&N 7.8.w.R.1h===\'1m\'){7.d.1h=$(\'<a 1H="\'+7.8.e.1e.1h+\'" 5S="1h" e="6e:1Q; q: 4a"></a>\').G(2P(7.8.e.1h,H)).2g(7.8.w.R.1h).5K(7.d.R).5N(h(p){c(!7.U.1Y){7.B(p)}})}}h 4T(){T 7,2Z,2q,3x;7=A;2Z=7.8.r.K.s;2q=7.8.B.K.s;c(7.8.B.35){2q=2q.2k(7.d.j)}3x=[\'5N\',\'6a\',\'5p\',\'6d\',\'4y\',\'4w\',\'6b\',\'6c\',\'31\'];h 3H(p){c(7.U.1Y===H){D}25(7.1F.21);7.1F.21=3L(h(){$(3x).1I(h(){2q.1P(A+\'.f-21\');7.d.w.1P(A+\'.f-21\')});7.B(p)},7.8.B.2R)}c(7.8.B.35===H){7.d.j.1G(\'31.f\',h(){c(7.U.1Y===H){D}25(7.1F.B)})}h 4l(p){c(7.U.1Y===H){D}c(7.8.B.K.p===\'21\'){$(3x).1I(h(){2q.1G(A+\'.f-21\',3H);7.d.w.1G(A+\'.f-21\',3H)});3H()}25(7.1F.r);25(7.1F.B);c(7.8.r.2R>0){7.1F.r=3L(h(){7.r(p)},7.8.r.2R)}C{7.r(p)}}h 4n(p){c(7.U.1Y===H){D}c(7.8.B.35===H&&(/1W(54|52)/i).26(7.8.B.K.p)&&$(p.6X).5z(\'Y.f[11^="f"]\').Q>0){p.7C();p.7B();25(7.1F.B);D o}25(7.1F.r);25(7.1F.B);7.d.j.4s(H,H);7.1F.B=3L(h(){7.B(p)},7.8.B.2R)}c((7.8.r.K.s.2k(7.8.B.K.s).Q===1&&7.8.r.K.p===7.8.B.K.p&&7.8.B.K.p!==\'21\')||7.8.B.K.p===\'3p\'){7.1r.2O=0;2Z.1G(7.8.r.K.p+\'.f\',h(p){c(7.1r.2O===0){4l(p)}C{4n(p)}})}C{2Z.1G(7.8.r.K.p+\'.f\',4l);c(7.8.B.K.p!==\'21\'){2q.1G(7.8.B.K.p+\'.f\',4n)}}c((/(35|3c)/).26(7.8.q.14)){7.d.j.1G(\'31.f\',7.2v)}c(7.8.q.s===\'1W\'&&7.8.q.14!==\'2c\'){2Z.1G(\'4y.f\',h(p){7.1r.1W={x:p.4k,y:p.4i};c(7.U.1Y===o&&7.8.q.1V.1W===H&&7.8.q.14!==\'2c\'&&7.d.j.G(\'2a\')!==\'33\'){7.28(p)}})}}h 22(){T 7,2g,2o;7=A;2o=7.32();2g=\'<7D 1H="f-22" 7E="0" 7H="-1" 4H="7G:o" \'+\'e="2a:48; q:3c; z-3u:-1; 4S:7F(3r=\\\'0\\\'); J: 1E 3K 49; \'+\'E:\'+2o.E+\'18; k:\'+2o.k+\'18" />\';7.d.22=7.d.1u.3g(2g).2u(\'.f-22:1M\')}h 3X(){T 7,w,1v,17,2A;7=A;7.5V.S(7);7.U.1f=H;7.d.j=\'<Y f="\'+7.11+\'" 11="f-\'+7.11+\'" 5S="j" \'+\'3z-7z="f-\'+7.11+\'-w" 1H="f \'+(7.8.e.1e.j||7.8.e)+\'" \'+\'e="2a:33; -7y-J-F:0; -7s-J-F:0; J-F:0; q:\'+7.8.q.14+\';"> \'+\'  <Y 1H="f-1u" e="q:4a; 2n:1B; 1s-3t:P;"> \'+\'    <Y 1H="f-1z" e="2n:1B;"> \'+\'       <Y 11="f-\'+7.11+\'-w" 1H="f-w \'+7.8.e.1e.w+\'"></Y> \'+\'</Y></Y></Y>\';7.d.j=$(7.d.j);7.d.j.68(7.8.q.3n);7.d.j.17(\'f\',{3b:0,M:[7]});7.d.1u=7.d.j.2u(\'Y:1M\');7.d.1z=7.d.1u.2u(\'Y:1M\').G({1j:7.8.e.1j});7.d.w=7.d.1z.2u(\'Y:1M\').G(2P(7.8.e));c($.12.1d){7.d.1u.2k(7.d.w).G({2e:1})}c(7.8.B.K.p===\'3p\'){7.d.j.16(\'3p\',H)}c(N 7.8.e.k.2X===\'2h\'){7.3R()}c($(\'<1c />\').1n(0).1A||$.12.1d){c(7.8.e.J.F>0){4Y.S(7)}C{7.d.1z.G({J:7.8.e.J.k+\'18 3K \'+7.8.e.J.I})}c(7.8.e.g.u!==o){41.S(7)}}C{7.d.1z.G({J:7.8.e.J.k+\'18 3K \'+7.8.e.J.I});7.8.e.J.F=0;7.8.e.g.u=o}c((N 7.8.w.1s===\'1m\'&&7.8.w.1s.Q>0)||(7.8.w.1s.4j&&7.8.w.1s.Q>0)){w=7.8.w.1s}C c(N 7.d.s.16(\'R\')===\'1m\'&&7.d.s.16(\'R\').Q>0){w=7.d.s.16(\'R\').2C(/\\n/5O,\'<5R />\');7.d.s.16(\'R\',\'\')}C c(N 7.d.s.16(\'3P\')===\'1m\'&&7.d.s.16(\'3P\').Q>0){w=7.d.s.16(\'3P\').2C(/\\n/5O,\'<5R />\');7.d.s.16(\'3P\',\'\')}C{w=\' \'}c(7.8.w.R.1s!==o){5W.S(7)}7.4D(w);4T.S(7);c(7.8.r.3Q===H){7.r()}c(7.8.w.1v!==o){1v=7.8.w.1v;17=7.8.w.17;2A=7.8.w.2A||\'1n\';7.62(1v,17,2A)}7.67.S(7)}h 5t(s,8,11){T 7=A;7.11=11;7.8=8;7.U={40:o,1f:o,1Y:o,3s:o};7.d={s:s.4R(7.8.e.1e.s),j:1w,1u:1w,w:1w,1z:1w,R:1w,1h:1w,g:1w,22:1w};7.1r={1W:{},q:{},2O:0,2n:{P:o,L:o}};7.1F={};$.2t(7,7.8.V,{r:h(p){T 1b,1Z;c(!7.U.1f){D o}c(7.d.j.G(\'2a\')!==\'33\'){D 7}7.d.j.4s(H,o);1b=7.5H.S(7,p);c(1b===o){D 7}h 2D(){7.d.j.16(\'3z-1B\',H);c(7.8.q.14!==\'2c\'){7.2v()}7.5o.S(7,p);c($.12.1d){7.d.j.1n(0).e.7r(\'4S\')}7.d.j.G({3r:\'\'})}7.1r.2O=1;c(7.8.q.14!==\'2c\'){7.28(p,(7.8.r.X.Q>0))}c(N 7.8.r.1Z===\'1a\'){1Z=$(7.8.r.1Z)}C c(7.8.r.1Z===H){1Z=$(\'Y.f\').5m(7.d.j)}c(1Z){1Z.1I(h(){c($(A).f(\'V\').U.1f===H){$(A).f(\'V\').B()}})}c(N 7.8.r.X.14===\'h\'){7.8.r.X.14.S(7.d.j,7.8.r.X.Q);7.d.j.4N(h(){2D();$(A).4P()})}C{3V(7.8.r.X.14.2z()){20\'3j\':7.d.j.7q(7.8.r.X.Q,2D);1C;20\'4W\':7.d.j.7J(7.8.r.X.Q,h(){2D();c(7.8.q.14!==\'2c\'){7.28(p,H)}});1C;20\'59\':7.d.j.r(7.8.r.X.Q,2D);1C;2I:7.d.j.r(1w,2D);1C}7.d.j.4R(7.8.e.1e.3O)}D 7},B:h(p){T 1b;c(!7.U.1f){D o}C c(7.d.j.G(\'2a\')===\'33\'){D 7}25(7.1F.r);7.d.j.4s(H,o);1b=7.5j.S(7,p);c(1b===o){D 7}h 2J(){7.d.j.16(\'3z-1B\',H);7.d.j.G({3r:\'\'});7.5r.S(7,p)}7.1r.2O=0;c(N 7.8.B.X.14===\'h\'){7.8.B.X.14.S(7.d.j,7.8.B.X.Q);7.d.j.4N(h(){2J();$(A).4P()})}C{3V(7.8.B.X.14.2z()){20\'3j\':7.d.j.7x(7.8.B.X.Q,2J);1C;20\'4W\':7.d.j.7w(7.8.B.X.Q,2J);1C;20\'59\':7.d.j.B(7.8.B.X.Q,2J);1C;2I:7.d.j.B(1w,2J);1C}7.d.j.7v(7.8.e.1e.3O)}D 7},2O:h(p,2V){T 4U=/7I|2h/.26(N 2V)?2V:!7.d.j.30(\':2y\');7[4U?\'r\':\'B\'](p);D 7},28:h(p,3Y){c(!7.U.1f){D o}T 27=8.q,s=$(27.s),2K=7.d.j.4m(),2Q=7.d.j.4z(),1k,1g,q,1y=27.u.j,29=27.u.s,1b,Z,i,3S,2b,4C={P:h(){T 2M=q.P+2K-$(1q).k()-$(1q).3J(),2N=1y.x===\'P\'?-2K:1y.x===\'1Q\'?2K:0,1o=-2*27.1V.x;q.P+=q.P<0?2N+1k+1o:2M>0?2N-1k+1o:0;D 1l.4Q(2M)},L:h(){T 2M=q.L+2Q-$(1q).E()-$(1q).3N(),2N=1y.y===\'L\'?-2Q:1y.y===\'1K\'?2Q:0,56=29.y===\'L\'?1g:29.y===\'1K\'?-1g:0,1o=-2*27.1V.y;q.L+=q.L<0?2N+1g+1o:2M>0?2N+56+1o:0;D 1l.4Q(2M)}};c(p&&(/(7R|4I|54|7L|52)$/).26(p.14)&&8.q.s===\'1W\'){29={x:\'P\',y:\'L\'};1k=1g=0;q={L:p.4i,P:p.4k}}C{c(s[0]===3y){1k=s.k();1g=s.E();q={L:0,P:0}}C c(s[0]===1q){1k=s.k();1g=s.E();q={L:s.3N(),P:s.3J()}}C c(s.30(\'6H\')){Z=7.8.q.s.16(\'Z\').7O(\',\');24(i=0;i<Z.Q;i++){Z[i]=1x(Z[i],10)}3S=7.8.q.s.3d(\'7N\').16(\'1X\');2b=$(\'4G[7K="#\'+3S+\'"]:1M\').1o();s.q={P:1l.3e(2b.P+Z[0]),L:1l.3e(2b.L+Z[1])};3V(7.8.q.s.16(\'3h\').2z()){20\'7P\':1k=1l.58(1l.4Z(Z[2]-Z[0]));1g=1l.58(1l.4Z(Z[3]-Z[1]));1C;20\'7S\':1k=Z[2]+1;1g=Z[2]+1;1C;20\'7T\':1k=Z[0];1g=Z[1];24(i=0;i<Z.Q;i++){c(i%2===0){c(Z[i]>1k){1k=Z[i]}c(Z[i]<Z[0]){q.P=1l.3e(2b.P+Z[i])}}C{c(Z[i]>1g){1g=Z[i]}c(Z[i]<Z[1]){q.L=1l.3e(2b.L+Z[i])}}}1k=1k-(q.P-2b.P);1g=1g-(q.L-2b.L);1C}1k-=2;1g-=2}C{1k=s.4m();1g=s.4z();q=s.1o()}q.P+=29.x===\'1Q\'?1k:29.x===\'1t\'?1k/2:0;q.L+=29.y===\'1K\'?1g:29.y===\'1t\'?1g/2:0}q.P+=27.1V.x+(1y.x===\'1Q\'?-2K:1y.x===\'1t\'?-2K/2:0);q.L+=27.1V.y+(1y.y===\'1K\'?-2Q:1y.y===\'1t\'?-2Q/2:0);c(7.8.e.J.F>0){c(1y.x===\'P\'){q.P-=7.8.e.J.F}C c(1y.x===\'1Q\'){q.P+=7.8.e.J.F}c(1y.y===\'L\'){q.L-=7.8.e.J.F}C c(1y.y===\'1K\'){q.L+=7.8.e.J.F}}c(27.1V.2S){(h(){T 38={x:0,y:0},45={x:4C.P(),y:4C.L()},g=2L 2x(8.e.g.u);c(7.d.g&&g){c(g.x!==\'1t\'&&45.x>-1){g.x=38.x=g.x===\'P\'?\'1Q\':\'P\'}c(g.y!==\'1t\'&&45.y>-1){g.y=38.y=g.y===\'L\'?\'1K\':\'L\'}7.1r.2n={P:38.x===o,L:38.y===o};c(7.d.g.16(\'1T\')!==g.1m()){41.S(7,g)}}}())}c(!7.d.22&&$.12.1d&&1x($.12.3a.2B(0),10)===6){22.S(7)}1b=7.5Y.S(7,p);c(1b===o){D 7}7.1r.q=q;c(3Y===H){7.U.40=H;7.d.j.3Y(q,71,\'70\',h(){7.U.40=o})}C{7.d.j.G(q)}7.5Z.S(7,p);D 7},3R:h(1p){c(!7.U.1f||(1p&&N 1p!==\'2h\')){D o}T 1B=7.d.1z.6Z().2k(7.d.g).2k(7.d.1h),2e=7.d.1u.2k(7.d.1z.2u()),j=7.d.j,1J=7.8.e.k.1J,2f=7.8.e.k.2f;c(!1p){c(N 7.8.e.k.2X===\'2h\'){1p=7.8.e.k.2X}C{7.d.j.G({k:\'5T\'});1B.B();j.k(1p);c($.12.1d){2e.G({2e:\'\'})}1p=7.32().k;c(!7.8.e.k.2X){1p=1l.2f(1l.1J(1p,2f),1J)}}}c(1p%2){1p+=1}7.d.j.k(1p);1B.r();c(7.8.e.J.F){7.d.j.1L(\'.f-2i\').1I(h(i){$(A).k(1p-(7.8.e.J.F*2))})}c($.12.1d){2e.G({2e:1});7.d.1u.k(1p);c(7.d.22){7.d.22.k(1p).E(7.32.E)}}D 7},6R:h(1X){T g,2l,1i,u,W;c(!7.U.1f||N 1X!==\'1m\'||!$.19.f.2Y[1X]){D o}7.8.e=4q.S(7,$.19.f.2Y[1X],7.8.4x.e);7.d.w.G(2P(7.8.e));c(7.8.w.R.1s!==o){7.d.R.G(2P(7.8.e.R,H))}7.d.1z.G({6L:7.8.e.J.I});c(7.8.e.g.u!==o){c($(\'<1c />\').1n(0).1A){g=7.d.j.1L(\'.f-g 1c:1M\');1i=g.1n(0).1A(\'2d\');1i.5L(0,0,3m,3m);u=g.3d(\'Y[1T]:1M\').16(\'1T\');W=4f(u,7.8.e.g.O.k,7.8.e.g.O.E);4c.S(7,g,W,7.8.e.g.I||7.8.e.J.I)}C c($.12.1d){g=7.d.j.1L(\'.f-g [5d="3h"]\');g.16(\'3f\',7.8.e.g.I||7.8.e.J.I)}}c(7.8.e.J.F>0){7.d.j.1L(\'.f-2i\').G({6J:7.8.e.J.I});c($(\'<1c />\').1n(0).1A){2l=4b(7.8.e.J.F);7.d.j.1L(\'.f-1u 1c\').1I(h(){1i=$(A).1n(0).1A(\'2d\');1i.5L(0,0,3m,3m);u=$(A).3d(\'Y[1T]:1M\').16(\'1T\');4g.S(7,$(A),2l[u],7.8.e.J.F,7.8.e.J.I)})}C c($.12.1d){7.d.j.1L(\'.f-1u [5d="3v"]\').1I(h(){$(A).16(\'3f\',7.8.e.J.I)})}}D 7},4D:h(w,65){T 37,34,4E;h 4J(){7.3R();c(65!==o){c(7.8.q.14!==\'2c\'){7.28(7.d.j.30(\':2y\'),H)}c(7.8.e.g.u!==o){3T.S(7)}}}c(!7.U.1f||!w){D o}37=7.5D.S(7,w);c(N 37===\'1m\'){w=37}C c(37===o){D}c($.12.1d){7.d.1z.2u().G({2e:\'73\'})}c(w.4j&&w.Q>0){w.61(H).68(7.d.w).r()}C{7.d.w.2g(w)}34=7.d.w.1L(\'4G[7g=o]\');c(34.Q>0){4E=0;34.1I(h(i){$(\'<4G 4H="\'+$(A).16(\'4H\')+\'" />\').7f(h(){c(++4E===34.Q){4J()}})})}C{4J()}7.5F.S(7);D 7},62:h(1v,17,2A){T 1b;h 4B(w){7.5w.S(7);7.4D(w)}c(!7.U.1f){D o}1b=7.5y.S(7);c(1b===o){D 7}c(2A===\'5X\'){$.5X(1v,17,4B)}C{$.1n(1v,17,4B)}D 7},60:h(w){T 1b;c(!7.U.1f||!w){D o}1b=7.5v.S(7);c(1b===o){D 7}c(7.d.1h){7.d.1h=7.d.1h.61(H)}7.d.R.2g(w);c(7.d.1h){7.d.R.3g(7.d.1h)}7.5u.S(7);D 7},2v:h(p){T 4K,3o,3k,1b;c(!7.U.1f||7.8.q.14===\'2c\'){D o}4K=1x(7.d.j.G(\'z-3u\'),10);3o=7j+$(\'Y.f[11^="f"]\').Q-1;c(!7.U.3s&&4K!==3o){1b=7.5B.S(7,p);c(1b===o){D 7}$(\'Y.f[11^="f"]\').5m(7.d.j).1I(h(){c($(A).f(\'V\').U.1f===H){3k=1x($(A).G(\'z-3u\'),10);c(N 3k===\'2h\'&&3k>-1){$(A).G({5l:1x($(A).G(\'z-3u\'),10)-1})}$(A).f(\'V\').U.3s=o}});7.d.j.G({5l:3o});7.U.3s=H;7.5C.S(7,p)}D 7},3A:h(2V){c(!7.U.1f){D o}7.U.1Y=2V?H:o;D 7},2T:h(){T i,1b,M;1b=7.5A.S(7);c(1b===o){D 7}c(7.U.1f){7.8.r.K.s.1P(\'4y.f\',7.28);7.8.r.K.s.1P(\'4w.f\',7.B);7.8.r.K.s.1P(7.8.r.K.p+\'.f\');7.8.B.K.s.1P(7.8.B.K.p+\'.f\');7.d.j.1P(7.8.B.K.p+\'.f\');7.d.j.1P(\'31.f\',7.2v);7.d.j.3l()}C{7.8.r.K.s.1P(7.8.r.K.p+\'.f-4v\')}c(N 7.d.s.17(\'f\')===\'1a\'){M=7.d.s.17(\'f\').M;c(N M===\'1a\'&&M.Q>0){24(i=0;i<M.Q-1;i++){c(M[i].11===7.11){M.5f(i,1)}}}}$.19.f.M.5f(7.11,1);c(N M===\'1a\'&&M.Q>0){7.d.s.17(\'f\').3b=M.Q-1}C{7.d.s.7k(\'f\')}7.5E.S(7);D 7.d.s},7e:h(){T r,1o;c(!7.U.1f){D o}r=(7.d.j.G(\'2a\')!==\'33\')?o:H;c(r){7.d.j.G({3M:\'1B\'}).r()}1o=7.d.j.1o();c(r){7.d.j.G({3M:\'2y\'}).B()}D 1o},32:h(){T r,2o;c(!7.U.1f){D o}r=(!7.d.j.30(\':2y\'))?H:o;c(r){7.d.j.G({3M:\'1B\'}).r()}2o={E:7.d.j.4z(),k:7.d.j.4m()};c(r){7.d.j.G({3M:\'2y\'}).B()}D 2o}})}$.19.f=h(8,4u){T i,11,M,23,2m,1S,15,V;c(N 8===\'1m\'){c(8===\'V\'){D $(A).17(\'f\').M[$(A).17(\'f\').3b]}C c(8===\'M\'){D $(A).17(\'f\').M}}C{c(!8){8={}}c(N 8.w!==\'1a\'||(8.w.4j&&8.w.Q>0)){8.w={1s:8.w}}c(N 8.w.R!==\'1a\'){8.w.R={1s:8.w.R}}c(N 8.q!==\'1a\'){8.q={u:8.q}}c(N 8.q.u!==\'1a\'){8.q.u={s:8.q.u,j:8.q.u}}c(N 8.r!==\'1a\'){8.r={K:8.r}}c(N 8.r.K!==\'1a\'){8.r.K={p:8.r.K}}c(N 8.r.X!==\'1a\'){8.r.X={14:8.r.X}}c(N 8.B!==\'1a\'){8.B={K:8.B}}c(N 8.B.K!==\'1a\'){8.B.K={p:8.B.K}}c(N 8.B.X!==\'1a\'){8.B.X={14:8.B.X}}c(N 8.e!==\'1a\'){8.e={1X:8.e}}8.e=4p(8.e);23=$.2t(H,{},$.19.f.2U,8);23.e=4q.S({8:23},23.e);23.4x=$.2t(H,{},8)}D $(A).1I(h(){c(N 8===\'1m\'){1S=8.2z();M=$(A).f(\'M\');c(N M===\'1a\'){c(4u===H&&1S===\'2T\'){5i(M.Q>0){M[M.Q-1].2T()}}C{c(4u!==H){M=[$(A).f(\'V\')]}24(i=0;i<M.Q;i++){c(1S===\'2T\'){M[i].2T()}C c(M[i].U.1f===H){c(1S===\'r\'){M[i].r()}C c(1S===\'B\'){M[i].B()}C c(1S===\'2v\'){M[i].2v()}C c(1S===\'3A\'){M[i].3A(H)}C c(1S===\'7c\'){M[i].3A(o)}C c(1S===\'7b\'){M[i].28()}}}}}}C{15=$.2t(H,{},23);15.B.X.Q=23.B.X.Q;15.r.X.Q=23.r.X.Q;c(15.q.3n===o){15.q.3n=$(3y.7a)}c(15.q.s===o){15.q.s=$(A)}c(15.r.K.s===o){15.r.K.s=$(A)}c(15.B.K.s===o){15.B.K.s=$(A)}15.q.u.j=2L 2x(15.q.u.j);15.q.u.s=2L 2x(15.q.u.s);11=$.19.f.M.Q;24(i=0;i<11;i++){c(N $.19.f.M[i]===\'5x\'){11=i;1C}}2m=2L 5t($(A),15,11);$.19.f.M[11]=2m;c(N $(A).17(\'f\')===\'1a\'&&$(A).17(\'f\')){c(N $(A).16(\'f\')===\'5x\'){$(A).17(\'f\').3b=$(A).17(\'f\').M.Q}$(A).17(\'f\').M.5c(2m)}C{$(A).17(\'f\',{3b:0,M:[2m]})}c(15.w.4O===o&&15.r.K.p!==o&&15.r.3Q!==H){15.r.K.s.1G(15.r.K.p+\'.f-\'+11+\'-4v\',{f:11},h(p){V=$.19.f.M[p.17.f];V.8.r.K.s.1P(V.8.r.K.p+\'.f-\'+p.17.f+\'-4v\');V.1r.1W={x:p.4k,y:p.4i};3X.S(V);V.8.r.K.s.75(V.8.r.K.p)})}C{2m.1r.1W={x:15.r.K.s.1o().P,y:15.r.K.s.1o().L};3X.S(2m)}}})};$.19.f.M=[];$.19.f.6Y={6V:h(){D A}};$.19.f.7U={};$.19.f.2U={w:{4O:o,1s:o,1v:o,17:1w,R:{1s:o,1h:o}},q:{s:o,u:{s:\'3C\',j:\'3I\'},1V:{x:0,y:0,1W:H,2S:o,2j:H,3D:H},14:\'3c\',3n:o},r:{K:{s:o,p:\'31\'},X:{14:\'3j\',Q:46},2R:7t,1Z:o,3Q:o},B:{K:{s:o,p:\'4w\'},X:{14:\'3j\',Q:46},2R:0,35:o},V:{5V:h(){},67:h(){},5Y:h(){},5Z:h(){},5H:h(){},5o:h(){},5j:h(){},5r:h(){},5D:h(){},5F:h(){},5y:h(){},5w:h(){},5v:h(){},5u:h(){},5A:h(){},5E:h(){},5B:h(){},5C:h(){}}};$.19.f.2Y={2U:{1j:\'5P\',I:\'#79\',2n:\'1B\',78:\'P\',k:{2f:0,1J:74},2w:\'76 77\',J:{k:1,F:0,I:\'#7d\'},g:{u:o,I:o,O:{k:13,E:13},3r:1},R:{1j:\'#7l\',7m:\'7i\',2w:\'7h 6O\'},1h:{6P:\'6Q\'},1e:{s:\'\',g:\'f-g\',R:\'f-R\',1h:\'f-1h\',w:\'f-w\',3O:\'f-3O\'}},5J:{J:{k:3,F:0,I:\'#6N\'},R:{1j:\'#6M\',I:\'#5I\'},1j:\'#6I\',I:\'#5I\',1e:{j:\'f-5J\'}},69:{J:{k:3,F:0,I:\'#6K\'},R:{1j:\'#6S\',I:\'#5U\'},1j:\'5P\',I:\'#5U\',1e:{j:\'f-69\'}},57:{J:{k:3,F:0,I:\'#7o\'},R:{1j:\'#6T\',I:\'#4M\'},1j:\'#6U\',I:\'#4M\',1e:{j:\'f-57\'}},49:{J:{k:3,F:0,I:\'#6W\'},R:{1j:\'#7n\',I:\'#51\'},1j:\'#7p\',I:\'#51\',1e:{j:\'f-49\'}},5M:{J:{k:3,F:0,I:\'#7M\'},R:{1j:\'#7Q\',I:\'#4X\'},1j:\'#7u\',I:\'#4X\',1e:{j:\'f-5M\'}},5G:{J:{k:3,F:0,I:\'#7A\'},R:{1j:\'#6y\',I:\'#6x\'},1j:\'#6F\',I:\'#6t\',1e:{j:\'f-5G\'}}}}(72));',62,491,'|||||||self|options||||if|elements|style|qtip|tip|function||tooltip|width||||false|event|position|show|target||corner||content||||this|hide|else|return|height|radius|css|true|color|border|when|top|interfaces|typeof|size|left|length|title|call|var|status|api|coordinates|effect|div|coords||id|browser||type|config|attr|data|px|fn|object|returned|canvas|msie|classes|rendered|targetHeight|button|context|background|targetWidth|Math|string|get|offset|newWidth|window|cache|text|center|wrapper|url|null|parseInt|my|contentWrapper|getContext|hidden|break|finalStyle|1px|timers|bind|class|each|max|bottom|find|first|ieAdjust|containers|unbind|right|tips|command|rel|positionAdjust|adjust|mouse|name|disabled|solo|case|inactive|bgiframe|opts|for|clearTimeout|test|posOptions|updatePosition|at|display|imagePos|static||zoom|min|html|number|betweenCorners|scroll|add|borders|obj|overflow|dimensions|path|hideTarget|margin|styleExtend|extend|children|focus|padding|Corner|visible|toLowerCase|method|charAt|replace|afterShow|line|precedance|90|styleObj|default|afterHide|elemWidth|new|over|myOffset|toggle|jQueryStyle|elemHeight|delay|screen|destroy|defaults|state|borderBottom|value|styles|showTarget|is|mouseover|getDimensions|none|images|fixed|borderTop|parsedContent|adjusted|font|version|current|absolute|parent|floor|fillcolor|prepend|shape|delete|fade|elemIndex|remove|300|container|newIndex|unfocus|VML|opacity|focused|align|index|arc|newMargin|inactiveEvents|document|aria|disable|coordsize|bottomRight|resize|behavior|styleArray|image|inactiveMethod|topLeft|scrollLeft|solid|setTimeout|visiblity|scrollTop|active|alt|ready|updateWidth|mapName|positionTip|arguments|switch|paddingCorner|construct|animate|borderCoord|animated|createTip|sideWidth|vertWidth|marginTop|adapted|100|bottomLeft|block|red|relative|calculateBorders|drawTip|topRight|betweenWidth|calculateTip|drawBorder|ltr|pageY|jquery|pageX|showMethod|outerWidth|hideMethod|paddingSize|sanitizeStyle|buildStyle|adjustTimer|stop|vertical|blanket|create|mouseout|user|mousemove|outerHeight|dir|setupContent|adapt|updateContent|loadedImages|sub|img|src|in|afterLoad|curIndex|fillStyle|f3f3f3|queue|prerender|dequeue|round|addClass|filter|assignEvents|condition|inline|slide|58792E|createBorder|abs||9C2F2F|leave|lineTo|out|stroked|atOffset|dark|ceil|grow|beginPath|fill|push|nodeName|bottomright|splice|match|middle|while|beforeHide|bottomleft|zIndex|not|topleft|onShow|mousedown|topright|onHide|String|QTip|onTitleUpdate|beforeTitleUpdate|onContentLoad|undefined|beforeContentLoad|parents|beforeDestroy|beforeFocus|onFocus|beforeContentUpdate|onDestroy|onContentUpdate|blue|beforeShow|A27D35|cream|prependTo|clearRect|green|click|gi|white|append|br|role|auto|454545|beforeRender|createTitle|post|beforePositionUpdate|onPositionUpdate|updateTitle|clone|loadContent|270|apply|reposition|unshift|onRender|appendTo|light|dblclick|mouseenter|mouseleave|mouseup|float|labelledby|eq|Right|lefttop|leftcenter|righttop|leftbottom|rightbottom|rightcenter|bottomcenter|use|strict|search|topcenter|4D9FBF|PI|marginLeft|moveTo|5E99BD|D0E9F5|xe|borderWidth|0px|Left|startangle|endangle|E5F6FE|filled|area|FBF7AA|backgroundColor|E2E2E2|borderColor|F0DE7D|F9E98E|12px|cursor|pointer|updateStyle|f1f1f1|404040|505050|error|CE6F6F|relatedTarget|log|siblings|swing|200|jQuery|normal|250|trigger|5px|9px|textAlign|111|body|update|enable|d3d3d3|getPosition|load|complete|7px|bold|15000|removeData|e1e1e1|fontWeight|f28279|303030|F79992|fadeIn|removeAttribute|webkit|140|CDE6AC|removeClass|slideUp|fadeOut|moz|describedby|ADD9ED|preventDefault|stopPropagation|iframe|frameborder|alpha|javascript|tabindex|boolean|slideDown|usemap|enter|A9DB66|map|split|rect|b9db8c|move|circle|poly|constants'.split('|'),0,{}))

/*
 * PrimeFaces Tooltip Widget
 */
PrimeFaces.widget.Tooltip = function(cfg) {
	this.cfg = cfg;
	var target = "";

	if(this.cfg.global) {
		target = "*[title]";
	}else {
		target = PrimeFaces.escapeClientId(this.cfg.forComponent);
	}

    this.cfg.style = this.ThemeRoller;

	jQuery(target).qtip(this.cfg);
}

/*
 * ThemeRoller integration for qtip
 */
jQuery.fn.qtip.styles['defaults'].background=undefined;
jQuery.fn.qtip.styles['defaults'].color=undefined;
jQuery.fn.qtip.styles['defaults'].tip.background=undefined;
jQuery.fn.qtip.styles['defaults'].title.background=undefined;
jQuery.fn.qtip.styles['defaults'].title.fontWeight = undefined;

PrimeFaces.widget.Tooltip.prototype.ThemeRoller = {
    border: {
        width: 0,
        radius: 0
    },
    classes: {
        tooltip: 'ui-tooltip ui-widget',
        title: 'ui-widget-header',
        content: 'ui-tooltip-content ui-widget-content ui-corner-all'
    }
};