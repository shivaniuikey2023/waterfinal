var min = $('.min')
var weight = $('.weight')
var low = $('.low')
var med = $('.med')
var high = $('.high')
var para = $('.para')

low.on("click", doSome);

function doSome() {
event.preventDefault();
var apple = min.val();
var ex = (apple * 0.0026);
var pineapple= weight.val();
var oz = (pineapple * ex);
para.append(`${Math.round(oz)} oz of water`);
}

med.on("click", goSome);

function goSome() {
event.preventDefault();
var apple = min.val();
var ex = (apple * 0.0030);
var pineapple= weight.val();
var oz = (pineapple * ex);
para.append(`${Math.round(oz)} oz of water`);
}

high.on("click", soSome);

function soSome() {
event.preventDefault();
var apple = min.val();
var ex = (apple * 0.0033);
var pineapple= weight.val();
var oz = (pineapple * ex);
para.append(`${Math.round(oz)} oz of water`);
}


var mina = $('.mina')
var weighta = $('.weighta')
var lowa = $('.lowa')
var meda = $('.meda')
var higha = $('.higha')
var paraa = $('.paraa')

lowa.on("click", doThat);

function doThat() {
event.preventDefault();
var orange = mina.val();
var xe = (orange * 0.0029);
var watermelon = weighta.val();
var zo = (watermelon * xe);
paraa.append(`${Math.round(zo)} oz of water`);
}

meda.on("click", goThat);

function goThat() {
event.preventDefault();
var orange = mina.val();
var xe = (orange * 0.0032);
var watermelon = weighta.val();
var zo = (watermelon * xe);
paraa.append(`${Math.round(zo)} oz of water`);
}

higha.on("click", soThat);

function soThat() {
event.preventDefault();
var orange = mina.val();
var xe = (orange * 0.0036);
var watermelon = weighta.val();
var zo = (watermelon * xe);
paraa.append(`${Math.round(zo)} oz of water`);
}

var test1 = $('.test1');
var good = $('.good');

good.on("click", goodBtn);

function goodBtn() {
 event.preventDefault();
 test1.text("thanks for the feedback!");
}

var ok = $('.ok');

ok.on("click", okBtn)

function okBtn() {
 event.preventDefault();
test1.text("thanks for the feedback!");
}

var bad = $('.bad');

bad.on("click", badBtn)

function badBtn() {
 event.preventDefault();
test1.text("thanks for the feedback!");
}
