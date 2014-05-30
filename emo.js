$(window).ready(function(){
	CW.prepareRegExp();
	CW.reg_cmp.push({key:/\(facepalm\)/g, rep: "<img src='http:118.70.170.72:8082/files/emo/facepalm.gif' alt='(facepalm)' title='(facepalm)' class='ui_emoticon'/>", reptxt:'(facepalm)'});
	CW.reg_cmp.push({key:/\(facepalm2\)/g, rep: "<img src='http:118.70.170.72:8082/files/emo/facepalm2.gif' alt='(facepalm2)' title='(facepalm2)' class='ui_emoticon'/>", reptxt:'(facepalm2)'});
	CW.reg_cmp.push({key:/\(dull\)/g, rep: "<img src='http:118.70.170.72:8082/files/emo/dull.gif' alt='(dull)' title='(dull)' class='ui_emoticon'/>", reptxt:'(dull)'});
	CW.reg_cmp.push({key:/\(mooning\)/g, rep: "<img src='http:118.70.170.72:8082/files/emo/mooning.gif' alt='(mooning)' title='(mooning)' class='ui_emoticon'/>", reptxt:'(mooning)'});
	CW.reg_cmp.push({key:/\(finger\)/g, rep: "<img src='http:118.70.170.72:8082/files/emo/finger.gif' alt='(finger)' title='(finger)' class='ui_emoticon'/>", reptxt:'(finger)'});
	CW.reg_cmp.push({key:/\(airblade\)/g, rep: "<img src='http:118.70.170.72:8082/files/emo/airblade.gif' alt='(airblade)' title='(airblade)' class='ui_emoticon'/>", reptxt:'(airblade)'});
	CW.reg_cmp.push({key:/\(hehehe\)/g, rep: "<img src='http:118.70.170.72:8082/files/emo/hehehe.gif' alt='(hehehe)' title='(hehehe)' class='ui_emoticon'/>", reptxt:'(hehehe)'});
	CW.reg_cmp.push({key:/\(honho\)/g, rep: "<img src='http:118.70.170.72:8082/files/emo/honho.gif' alt='(honho)' title='(honho)' class='ui_emoticon'/>", reptxt:'(honho)'});
	CW.reg_cmp.push({key:/\(silly\)/g, rep: "<img src='http:118.70.170.72:8082/files/emo/silly.gif' alt='(silly)' title='(silly)' class='ui_emoticon'/>", reptxt:'(silly)'});
	CW.reg_cmp.push({key:/\(noinham\)/g, rep: "<img src='http:118.70.170.72:8082/files/emo/noinham.png' alt='(noinham)' title='(noinham)' class='ui_emoticon'/>", reptxt:'(noinham)'});
	CW.reg_cmp.push({key:/\(uongthuoc\)/g, rep: "<img src='http:118.70.170.72:8082/files/emo/uongthuoc.png' alt='(uongthuoc)' title='(uongthuoc)' class='ui_emoticon'/>", reptxt:'(uongthuoc)'});
	CW.reg_cmp.push({key:/\(liem\)/g, rep: "<img src='http://pik.vn/2014ebeaf3ca-78a9-488c-a5b2-fc31664e504d.jpeg' alt='(liem)' title='(liem)' class='ui_emoticon'/>", reptxt:'(liem)'});	
	CW.reg_cmp.push({key:/\(ban\)/g, rep: "<img src='http://pik.vn/2014891d3ecb-236d-40d8-bfa1-d1f805f7c612.png' alt='(ban)' title='(ban)' class='ui_emoticon'/>", reptxt:'(ban)'});	
	CW.reg_cmp.push({key:/\(\+1\)/g, rep: "<img src='http://pik.vn/2014056ee1f7-27fc-48dd-8e1b-2f6957282b47.jpeg' alt='(+1)' title='(+1)' class='ui_emoticon'/>", reptxt:'(+1)'});
	CW.reg_cmp.push({key:/\(lol\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t1518.gif' alt='(lol)' title='(lol)' class='ui_emoticon'/>", reptxt:'(lol)'});
	CW.reg_cmp.push({key:/\(veu\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t1523.gif' alt='(veu)' title='(veu)' class='ui_emoticon'/>", reptxt:'(veu)'});
	CW.reg_cmp.push({key:/\(doggy\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t1511.gif' alt='(doggy)' title='(doggy)' class='ui_emoticon'/>", reptxt:'(doggy)'});
	CW.reg_cmp.push({key:/\(rofl\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/24.gif' alt='(rofl)' title='(rofl)' class='ui_emoticon'/>", reptxt:'(rofl)'});
	CW.reg_cmp.push({key:/\(mooning2\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t1543.gif' alt='(mooning2)' title='(mooning2)' class='ui_emoticon'/>", reptxt:'(mooning2)'});
	CW.reg_cmp.push({key:/\(xephinh\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t1594.gif' alt='(xephinh)' title='(xephinh)' class='ui_emoticon'/>", reptxt:'(xephinh)'});
	CW.reg_cmp.push({key:/\(bj\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t15116.gif' alt='(bj)' title='(bj)' class='ui_emoticon'/>", reptxt:'(bj)'});
	CW.reg_cmp.push({key:/\(nude\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t15109.gif' alt='(nude)' title='(nude)' class='ui_emoticon'/>", reptxt:'(nude)'});
	CW.reg_cmp.push({key:/\(69\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t15126.gif' alt='(69)' title='(69)' class='ui_emoticon'/>", reptxt:'(69)'});
	CW.reg_cmp.push({key:/\(fuck\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t15164.gif' alt='(fuck)' title='(fuck)' class='ui_emoticon'/>", reptxt:'(fuck)'});
	CW.reg_cmp.push({key:/\(cuoideu\)/g, rep: "<img src='http://aoevietnam.org/images/icon2009/cuoideu.gif' alt='(cuoideu)' title='(cuoideu)' class='ui_emoticon'/>", reptxt:'(cuoideu)'});
	
});