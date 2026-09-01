(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  // symbols:

  (lib.Asset1 = function () {
    this.initialize(img.Asset1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 170, 146);

  (lib.baru = function () {
    this.initialize(img.baru);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 667, 1000);

  (lib.BM_03 = function () {
    this.initialize(img.BM_03);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 121, 106);

  (lib.cursor = function () {
    this.initialize(img.cursor);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 69, 72);

  (lib.flare = function () {
    this.initialize(img.flare);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 263, 263);

  (lib.frame1 = function () {
    this.initialize(img.frame1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 320, 480);

  (lib.Image = function () {
    this.initialize(img.Image);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 279, 181);

  (lib.indomaret = function () {
    this.initialize(img.indomaret);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 667, 1000);

  (lib.lefthand = function () {
    this.initialize(img.lefthand);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 320, 480);

  (lib.righthand = function () {
    this.initialize(img.righthand);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 320, 480);

  (lib.t1 = function () {
    this.initialize(img.t1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 667, 1000);

  (lib.t2 = function () {
    this.initialize(img.t2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 667, 1000);

  (lib.visit = function () {
    this.initialize(img.visit);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 320, 480); // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(this.mode, this.startPosition, this.loop),
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.Tween20 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.flare();
    this.instance.parent = this;
    this.instance.setTransform(0, -146, 0.522, 0.522);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -146, 137.3, 137.3);

  (lib.Tween19 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Asset1();
    this.instance.parent = this;
    this.instance.setTransform(-136, -137, 1.1362, 1.1362);

    this.instance_1 = new lib.Asset1();
    this.instance_1.parent = this;
    this.instance_1.setTransform(-84, -80, 0.7653, 0.7653);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-136, -137, 193.2, 168.8);

  (lib.Tween18 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.lefthand();
    this.instance.parent = this;
    this.instance.setTransform(-160, -240);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-160, -240, 320, 480);

  (lib.Tween17 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.righthand();
    this.instance.parent = this;
    this.instance.setTransform(-160, -240);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-160, -240, 320, 480);

  (lib.Tween16 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.frame1();
    this.instance.parent = this;
    this.instance.setTransform(-160, -240);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-160, -240, 320, 480);

  (lib.Tween15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.cursor();
    this.instance.parent = this;
    this.instance.setTransform(-15.55, -16.2, 0.4507, 0.4507);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-15.5, -16.2, 31.1, 32.5);

  (lib.Tween14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.visit();
    this.instance.parent = this;
    this.instance.setTransform(-160, -240);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-160, -240, 320, 480);

  (lib.Tween13 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.t2();
    this.instance.parent = this;
    this.instance.setTransform(-160, -239.85, 0.4798, 0.4797);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-160, -239.8, 320, 479.70000000000005);

  (lib.Tween9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.indomaret();
    this.instance.parent = this;
    this.instance.setTransform(-160, -239.85, 0.4797, 0.4797);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-160, -239.8, 320, 479.70000000000005);

  (lib.Tween8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.BM_03();
    this.instance.parent = this;
    this.instance.setTransform(-30.85, -27, 0.51, 0.51);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-30.8, -27, 61.7, 54.1);

  (lib.Tween6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.t1();
    this.instance.parent = this;
    this.instance.setTransform(-160, -239.85, 0.4798, 0.4797);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-160, -239.8, 320, 479.70000000000005);

  (lib.Tween1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.baru();
    this.instance.parent = this;
    this.instance.setTransform(-160, -239.85, 0.4798, 0.4797);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-160, -239.8, 320, 479.70000000000005);

  (lib.Scene_1_Layer_8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_8
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(40,40,40,0.698)")
      .s()
      .p("AkrHIIAAuOIJXAAIAAOOg");
    this.shape.setTransform(219.9, 272.85);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape)
        .wait(84)
        .to({ _off: false }, 0)
        .to({ _off: true }, 2)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(16)
        .to({ _off: false }, 0)
        .to({ _off: true }, 2)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(84),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Scene_1_Layer_7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_7
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(40,40,40,0.698)")
      .s()
      .p("AkkGkIAAtHIJJAAIAANHg");
    this.shape.setTransform(105.55, 300.4);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape)
        .wait(74)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ _off: true }, 1)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(16)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ _off: true }, 1)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(94),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Scene_1_Layer_4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_4
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#F2F2F2").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
    this.shape.setTransform(160, 240);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(192));
  }).prototype = p = new cjs.MovieClip();

  (lib.ending_t4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // t4
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "Ag+B9QgPgNAAgfIABgVQAAgJACgHIAuAAIgBAEIAAAGQAAAPADAGQAEAGAKAAQALgBACgFQADgEAAgRQAAgLgDgFQgCgFgIgEQgFgFgIgEIgOgGIgOgHQgHgDgFgEQgKgKgDgQQgCgRAAgaQAAgTACgNQAEgNAHgHQAHgIANgDQANgEATAAQARAAAMADQAMACAIAIQAIAGADAMQADALAAAQIAAASIgCALIguAAIABgFIAAgHQAAgMgEgFQgBgEgLgBQgKABgCAEQgEAFAAAMQAAAMAEAFQADAEAGAEIAOAIIAMAFIAMAGIAJAFIAKAJQAFAFADAHQADAIABALIABAbQAAAYgDAPQgEAQgHAJQgJAKgNAEQgNAEgTAAQghAAgQgMgAFCCEIAAkHIA5AAIAAEHgAEOCEIg/iMIgCAAIAACMIgxAAIAAkHIA2AAIAlBbIABAAIAAhbIAzAAIAAEHgABLCEIAAkHIA5AAIAAEHgAjUCEIAAkHIA4AAIAAEHgAl6CEIAAkHIBKAAQAZAAANAEQANAFAHALIAHAOQABAGACAMIACAfIABAwIgBAxIgCAfIgDATQgDAHgEAFQgDAHgFADQgFAFgHACQgHADgJAAIgWABgAlDBKIARAAQAHAAADgBQACgBACgFIABgFIABgLIABgUIAAgfIAAghIgBgUIgBgLIgBgGQgCgDgCgCQgDgBgHAAIgRAAg",
      );
    this.shape.setTransform(233.9, 201.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FF0000")
      .s()
      .p(
        "AgaCEQgNgFgIgLQgDgGgCgIIgFgUIgBgiIgBgxIABgyIABggIAFgTIAFgNQAIgMANgEQANgFAZAAQAWAAAOAFQANADAHAKQAIAKACAOQACAPABAVIAAALIgBANIgzAAIAAgSIgBgLIgBgHIgBgFQgBgHgNAAQgHAAgDACQgCACgBADIgCAGIgBALIgBAWIAAAiIAAAiIABAWIABALIACAHQABADACABQADACAIAAQALAAACgGIACgHIABgJIABgLIAAgOIAzAAIABAYQAAAVgDAQQgCAPgIAKQgHAKgOAFQgNAFgWAAQgZAAgOgFgAmwCEQgNgFgIgLIgFgOIgFgTIgBggIgBgzIABgyIABggIAFgTIAFgNQAEgHAFgDQAFgFAGgCQAIgDAJgBIAXgBQAZAAAMAFQAOAEAHANIAGANQADAHABAMIACAgIABAyIgBAzIgCAgQgBAMgDAHIgGAOQgDAFgGAFQgEAEgHACQgHADgKABIgVABQgaAAgNgFgAmThQQgDACgBADIgCAGIgBAMIAAAVIAAAkIAAAhIAAAVIABALIACAHQABADADABQADACAHAAQAGAAADgCQADgBABgDIABgHIACgLIAAgVIAAghIAAgkIAAgVIgCgMIgBgGQgBgDgDgCQgDgCgGAAQgHAAgDACgApOCEQgOgFgGgLQgEgGgDgIIgDgUIgDgiIgBgxIABgyIADggIADgTIAHgNQAGgMAOgEQANgFAZAAQAXAAANAFQAOADAIAKQAHAKADAOQACAPAAAVIAAALIgBANIg0AAIAAgSIAAgLIgBgHIgBgFQgBgHgOAAQgGAAgDACQgDACgBADIgBAGIgCALIgBAWIAAAiIAAAiIABAWIACALIABAHQABADADABQADACAIAAQALAAACgGIACgHIABgJIAAgLIAAgOIA0AAIAAAYQAAAVgCAQQgCAPgHAKQgIAKgOAFQgNAFgWAAQgaAAgOgFgAIyCEIAAkHIBQAAQARAAAMAEQAMAFAGAKQAHAMACAQQADASAAAZQAAAbgDARQgCARgHALQgGAMgMAFQgMAEgRABIgZAAIAABPgAJpgBIAPAAQAHAAADgIQADgJAAgYQABgVgEgGQgEgHgIAAIgNAAgAHhCEIAAkHIA4AAIAAEHgAGWCEIgDgGIgBgMIgDgVIgEgkIgCgPQgBgFgCgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgFgBIgIAAIAABnIg3AAIAAkHIBQAAQASgBALAEQAMAFAHAIQAGAJADANQADAOAAATQAAAVgCAMQgBALgDAHQgDAGgEADIgKAGIAAADIAFADQACACACAFQACAHAEAMQADANACAXIAEAaIABAQIABAJIACAGIAAABgAF2gTIAPAAQAIAAADgGQADgHAAgTQAAgPgDgFQgEgGgIAAIgOAAgADNCEIAAjQIgpAAIAAg3ICKAAIAAA3IgpAAIAADQgAiICEIAAkHIA5AAIAAEHgAi8CEIg/iMIgCAAIAACMIgyAAIAAkHIA2AAIAlBbIACAAIAAhbIAzAAIAAEHgAq8CEIAAkHIA4AAIAAEHg",
      );
    this.shape_1.setTransform(117.1, 201.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 133)
        .wait(59),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.ending_t3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // t3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AiSCDQgOgEgGgLIgGgKQgCgEgCgIIgCgSIgBgbIAAi3IA4AAIAAC3IABAOQAAAGACACQACADADABIAIABIAIgBQADgBACgDQACgCAAgGIABgOIAAi3IA3AAIAAC3IgCAbIgDASIgDAMIgFAKQgEAFgEAEQgFAEgHACIgRADIgWABQgZAAgNgEgAGRCCIg/iNIgCAAIAACNIgyAAIAAkIIA2AAIAlBcIACAAIAAhcIAzAAIAAEIgADWCCIgFg9IgaAAIgEA9Ig3AAIAckIIBcAAIAbEIgAC5APIAWAAIgJhdIgEAAgAASCCIAAjQIgpAAIAAg4ICKAAIAAA4IgqAAIAADQgAkACCIghh3IgDAAIAAAKIAAAKIAABjIg4AAIAAkIIA4AAIAABhIAAAHIAAAHIADAAIAkhvIA5AAIAAACIgoB2IAsCPIAAABgAmtCCIAAkIIA5AAIAAEIg",
      );
    this.shape.setTransform(160.025, 166.025);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(129).to({ _off: false }, 0).wait(63),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Clip_Group_Layer_3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AkiFQIAAqfID+AAQCaAABbBpQBSBfAACHQAACIhSBfQhbBpiaAAgAh2C0IBSAAQBLAAAsg4QApgzAAhJQAAhIgpgzQgsg4hLAAIhSAAg",
      );
    this.shape.setTransform(764.525, 889.825);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p("Ai4FQIAAqfIFpAAIAACZIi+AAIAABfIDDAAIAACYIjDAAIAAB2IDGAAIAACZg");
    this.shape_1.setTransform(604.15, 889.825);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p("ABoFQIAAkOIjPAAIAAEOIiwAAIAAqfICwAAIAAD0IDPAAIAAj0ICwAAIAAKfg");
    this.shape_2.setTransform(530.675, 889.825);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p("ACsFVIgohVIkIAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
    this.shape_3.setTransform(679.625, 889.375);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p("ACsFVIgohVIkIAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
    this.shape_4.setTransform(446.875, 889.375);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AjsEGQhshiAAikQAAikBshhQBhhXCLAAQCMAABhBXQBsBhAACkQAACkhsBiQhhBXiMAAQiLAAhhhXgAhziIQg0AzAABVQAABWA0AzQAwAtBEAAQBEAAAwgtQA0gzAAhWQAAhVg0gzQgwgthEAAQhEAAgwAtg",
      );
    this.shape_5.setTransform(251.175, 889.975);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AjfEDQhshggBiiQABiiBshgQBhhXCKAAQBgABBLAqQBVAwAkBYIiXA8QgVgqgigUQgigTg0AAQhNAAguA3QgrA0AABQQAABUAuAyQAtAyBLAAQA3AAAggRQAjgTAWguIiPAAIAAiVIE+AAQAEA7gDAoQgEA1gQAsQgiBkhXAyQhNAthmAAQiKgBhhhVg",
      );
    this.shape_6.setTransform(165.0942, 889.75);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FF0000")
      .s()
      .p(
        "EhInBlAQihjEgXlYQgVkqBUlQQBOk3CAjGMAcwgxwQkCgnl3h8Qruj8pGmvQswpelstxQnIxPEW3DQCuuaITrJQHGpjKxmsQI+ljKZi+QIrifG0ABQPagBMiDwQKAC/HvFQQFiDxD1EgQB6CPA0BhQFXlkEkjRQEdjNEehmQEHheFEgbQEBgWGnAQQMOBSJmJ+QC/DICZDnQBMB0AlBMQuDmmqRBvQoOBalcGpQj4EwiHG5QhEDdgRCgMAOcBzMIN3M3IM5pfIFmI8MgiKAZKI5l03IhTr+MguqAfjMgo6gf5InnNVQB+DSBPEWQBUEogFD/QgHEeh7CkQiMC5kWAAQlfAAi6jkgEgk1Al3MArLAhxIa5y4IkH7sMg6SAAAgEg7bhH8QnQD4loG2QlhGviuIGQi0IWA1IAQBOL8ExJAQETIHG/FUQGUE1H+CLQHRCBHqgbISf/OQgTiThCjWQiDmsjnlOQlEnUndjUQpVkLskCXQAWguAxhGQBiiMCIh6QG1mHKRg+QFogjEMAOQE1ARELBUQI8C0JIJFICzj4Qg+hhh8iPQj5kgk1jwQmxlQnrjAQpmjxqegCIgGAAQoHAAnrEIgAxXEcMArzAAAMgH2g8cg",
      );
    this.shape_7.setTransform(615.1104, 669.25);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );
  }).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3, null, null);

  (lib.Clip_Group_1_Layer_3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgHAjIAGgQIABgTIgBgPIgGgTIAGAAQAEAJACAIQACAKABAHQgBAHgCAKQgCAJgEAJg");
    this.shape.setTransform(261.95, 50.725);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgJAXQgEgEgBgHIAJgBQAAAEACABQAAABABABQABAAAAAAQABABAAAAQAAAAAAAAQADAAABgDQACgCAAgFQAAgGgCgCQgBgCgDAAQgDABgDADIgHgCIAFgbIAVAAIAAAKIgPAAIgBAJIAEgCQAGAAADAFQAFAEAAAIQAAAIgEAFQgEAGgHAAQgFAAgEgEg",
      );
    this.shape_1.setTransform(259.225, 50.05);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgJAVQgFgGAAgPQAAgOAFgGQAEgGAGAAQAFAAAEADQADAEABAGIgIABQgBgGgEAAQgCAAgCADQgBADgBAJIADgDIAEgBQAFAAAEAEQAEAFAAAHQAAAIgEAFQgFAFgFAAQgGAAgEgGgAgDABQgBADAAAEQAAAGACACQAAABABAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQABAAAAAAQAAgBABAAQABgCAAgGQAAgFgBgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAg",
      );
    this.shape_2.setTransform(255.725, 50.025);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgJAXQgFgFAAgGIAJgBQABAFABAAQAAABABABQAAAAABAAQAAABABAAQAAAAAAAAQADAAACgDQABgCAAgFQAAgGgBgCQgDgCgCAAQgEABgCADIgHgCIAEgbIAWAAIAAAKIgPAAIgBAJIAEgCQAGAAADAFQAFAEAAAIQAAAGgEAHQgDAGgIAAQgFAAgEgEg",
      );
    this.shape_3.setTransform(252.25, 50.05);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgJAVQgFgGAAgPQAAgOAFgGQAEgGAGAAQAFAAAEADQADAEABAGIgIABQgBgGgEAAQgBAAgDADQgCAEAAAIIAEgDIADgBQAFAAAEAEQAEAFAAAHQAAAIgEAFQgFAFgFAAQgGAAgEgGgAgCABQgCACAAAFQAAAGACACQABADACAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQACgDAAgFQAAgEgCgDQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAg",
      );
    this.shape_4.setTransform(248.725, 50.025);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAQAAIAAAJg");
    this.shape_5.setTransform(245.9, 50.725);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p("AgHAaQgBgJAEgNQAEgLAEgJIgSAAIAAgKIAcAAIAAAIQgEAFgDAHIgFAQQgCAIAAAIg");
    this.shape_6.setTransform(243.1, 50);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p("AgHAaQgBgJAEgNQAEgLAEgJIgSAAIAAgKIAcAAIAAAIQgEAFgDAHIgFAQQgCAIAAAIg");
    this.shape_7.setTransform(239.6, 50);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p("AABAbIAAgmQgEAGgGACIAAgJIAIgGQADgDABgFIAGAAIAAA1g");
    this.shape_8.setTransform(235.85, 49.975);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAQAAIAAAJg");
    this.shape_9.setTransform(233.3, 50.725);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgJAVQgEgGAAgPQAAgOAEgGQAEgGAFAAQAHAAADAGQAEAGAAAOQAAAPgEAGQgDAGgHAAQgFAAgEgGgAgDgPQgBAEAAALQAAAMABADQAAABABABQAAAAAAABQABAAAAABQABAAAAAAQADAAABgEQABgDAAgMQAAgLgBgEQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABg",
      );
    this.shape_10.setTransform(230.475, 50.025);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgJAVQgEgGAAgPQAAgOAEgGQAEgGAFAAQAHAAADAGQAEAFAAAPQAAAQgEAFQgDAGgHAAQgFAAgEgGgAgDgPQgBAEAAALQAAAMABADQACAEABAAQADAAABgEQACgDAAgMQAAgLgCgEQgBgDgDAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBABg",
      );
    this.shape_11.setTransform(226.975, 50.025);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgJAXQgFgFAAgHQAAgFACgDQACgDAEgCQgEgBgBgDQgCgDAAgEQAAgFAEgFQADgDAGAAQAHAAADAEQADADAAAGQAAAEgCADQgBADgDABQAEACABADQACACAAAGQAAAFgCADQgBADgDADQgDACgFAAQgFAAgEgEgAgEAEQgBADAAADQAAAFABACQADACABAAQACAAACgCQACgCAAgFQAAgDgCgDQgCgCgCAAQgCAAgCACgAgDgRIgCAFQAAABABABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABABAAQAAAAAAAAIADgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg",
      );
    this.shape_12.setTransform(223.5, 50.025);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgJAVQgEgGAAgPQAAgOAEgGQAEgGAFAAQAGAAAFAGQADAFAAAPQAAAQgDAFQgFAGgGAAQgFAAgEgGgAgDgPQgBAEAAALQAAAMABADQACAEABAAQADAAABgEQACgDAAgMQAAgLgCgEQgBgDgDAAQAAAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABg",
      );
    this.shape_13.setTransform(219.975, 50.025);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AACAjQgEgJgCgIQgDgKAAgIQAAgHADgKQACgIAEgJIAGAAQgFALgBAIIgCAPIACATIAFAQg",
      );
    this.shape_14.setTransform(217.275, 50.725);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p("AAIAbIgLgZIgHAJIAAAQIgJAAIAAg1IAJAAIAAAYIARgYIAMAAIgRAVIASAgg");
    this.shape_15.setTransform(212.325, 49.975);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgOAVQgGgHAAgOQAAgIADgGQACgGAFgEQAFgDAFAAQAJAAAGAHQAGAIAAAMQAAAOgGAHQgGAHgJAAQgJAAgFgHgAgIgNQgDAEAAAJQAAAJADAFQAEAFAEAAQAFAAAEgFQADgEAAgKQAAgJgDgEQgDgEgGAAQgEAAgEAEg",
      );
    this.shape_16.setTransform(207.425, 49.975);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p("AAIAbIgLgZIgHAJIAAAQIgJAAIAAg1IAJAAIAAAYIARgYIAMAAIgRAVIASAgg");
    this.shape_17.setTransform(202.975, 49.975);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgOAVQgGgHAAgOQAAgJACgFQADgHAFgDQAEgDAGAAQAJAAAGAHQAGAIAAAMQAAAOgGAHQgFAHgKAAQgIAAgGgHgAgIgNQgDAEAAAJQAAAKADAEQAEAFAEAAQAFAAAEgFQADgFAAgJQAAgIgDgFQgEgEgFAAQgFAAgDAEg",
      );
    this.shape_18.setTransform(198.075, 49.975);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAJAbIgKgUIgDgCIgEgBIgCAAIAAAXIgJAAIAAg1IATAAQAGAAADACQADABACAEQACADAAAFQAAAHgDADQgDAEgFAAIAEAFIAFAIIAGALgAgKgDIANgBIADgCIABgEIgBgEIgDgCIgNgBg",
      );
    this.shape_19.setTransform(193.575, 49.975);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p("AgPAbIAAg1IAfAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAXAAIAAAJg");
    this.shape_20.setTransform(189.1, 49.975);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p("AANAbIAAgpIgJApIgHAAIgJgpIAAApIgIAAIAAg1IANAAIAHAkIAIgkIANAAIAAA1g");
    this.shape_21.setTransform(184.325, 49.975);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
    this.shape_22.setTransform(179.075, 49.975);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p("AgEAbIAAgsIgMAAIAAgJIAiAAIAAAJIgOAAIAAAsg");
    this.shape_23.setTransform(176.25, 49.975);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#FFFFFF")
      .s()
      .p("AAJAbIgRgiIAAAiIgIAAIAAg1IAIAAIARAjIAAgjIAIAAIAAA1g");
    this.shape_24.setTransform(172.075, 49.975);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#FFFFFF")
      .s()
      .p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
    this.shape_25.setTransform(167.825, 49.975);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#FFFFFF")
      .s()
      .p("AAIAbIAAgYIgQAAIAAAYIgJAAIAAg1IAJAAIAAAVIAQAAIAAgVIAJAAIAAA1g");
    this.shape_26.setTransform(163.4, 49.975);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAJAbIgKgUIgDgCIgEgBIgCAAIAAAXIgJAAIAAg1IATAAQAGAAADACQADABACAEQACAEAAAEQAAAHgDADQgEAEgFAAIAFAFIALATgAgKgDIAGAAIAHgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAABgBIABgEIgBgEIgDgCIgNgBg",
      );
    this.shape_27.setTransform(159.125, 49.975);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#FFFFFF")
      .s()
      .p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
    this.shape_28.setTransform(154.625, 49.975);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRAbIAAg1IARAAQAGAAADACQADAAACAEQACADAAAFQAAAEgBADIgFAEQAEABACADQACADAAAFQAAAHgCADQgEAFgDAAIgLABgAgJASIAPgBIACgCIABgEIgBgFIgDgCIgGgBIgIAAgAgJgEIAMgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAgBQAAAAAAgBIgBgEIgDgBIgHgBIgGAAg",
      );
    this.shape_29.setTransform(150.275, 49.975);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#FFFFFF")
      .s()
      .p("AAIAbIgQgiIAAAiIgJAAIAAg1IAJAAIARAjIAAgjIAIAAIAAA1g");
    this.shape_30.setTransform(143.9, 49.975);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#FFFFFF")
      .s()
      .p("AANAbIgFgMIgQAAIgEAMIgJAAIARg1IAJAAIARA1gAgFAGIAKAAIgFgTg");
    this.shape_31.setTransform(139.4, 49.975);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#FFFFFF")
      .s()
      .p("AAJAbIgRgiIAAAiIgIAAIAAg1IAIAAIARAjIAAgjIAIAAIAAA1g");
    this.shape_32.setTransform(134.875, 49.975);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#FFFFFF")
      .s()
      .p("AAMAbIgDgMIgRAAIgEAMIgJAAIARg1IAIAAIASA1gAgFAGIALAAIgGgTg");
    this.shape_33.setTransform(130.375, 49.975);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#FFFFFF")
      .s()
      .p("AgDAbIAAgXIgQgeIAKAAIAJAVIAKgVIAKAAIgPAeIAAAXg");
    this.shape_34.setTransform(126.6, 49.975);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#FFFFFF")
      .s()
      .p("AAMAbIgDgMIgRAAIgDAMIgKAAIARg1IAIAAIASA1gAgFAGIALAAIgGgTg");
    this.shape_35.setTransform(122.8, 49.975);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#FFFFFF")
      .s()
      .p("AgOAaIAAg0IAJAAIAAAsIAUAAIAAAIg");
    this.shape_36.setTransform(118.8, 50);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics.f("#FFFFFF").s().p("AgEAGIAAgLIAJAAIAAALg");
    this.shape_37.setTransform(263.85, 43.075);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#FFFFFF")
      .s()
      .p("AAPAfIgFgOIgUAAIgDAOIgMAAIAVg9IAJAAIAVA9gAgHAHIAOAAIgHgXg");
    this.shape_38.setTransform(168, 40.55);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#FFFFFF")
      .s()
      .p("AAKAfIgUgoIAAAoIgJAAIAAg9IAKAAIAUAoIAAgoIAJAAIAAA9g");
    this.shape_39.setTransform(162.8, 40.55);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#FFFFFF")
      .s()
      .p("AgSAfIAAg9IAlAAIAAALIgbAAIAAANIAZAAIAAAJIgZAAIAAARIAbAAIAAALg");
    this.shape_40.setTransform(157.9, 40.55);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#FFFFFF")
      .s()
      .p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
    this.shape_41.setTransform(153.075, 40.55);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAKAfIgLgXIgDgCIgGgBIgCAAIAAAaIgKAAIAAg9IAWAAQAIAAACACQAEABACAEQADAGAAAFQAAAGgEAFQgEAEgGAAIAGAGQACACADAIIAHAMgAgMgDIAIAAQAGAAACgCQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgEgBgCIgDgCIgQAAg",
      );
    this.shape_42.setTransform(147.875, 40.55);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#FFFFFF")
      .s()
      .p("AgSAfIAAg9IAkAAIAAALIgaAAIAAANIAYAAIAAAJIgYAAIAAARIAbAAIAAALg");
    this.shape_43.setTransform(142.725, 40.55);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#FFFFFF")
      .s()
      .p("AgEAfIAAgyIgPAAIAAgLIAnAAIAAALIgPAAIAAAyg");
    this.shape_44.setTransform(138.025, 40.55);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#FFFFFF")
      .s()
      .p("AAOAfIgEgOIgUAAIgDAOIgLAAIAUg9IAJAAIAUA9gAgGAHIAMAAIgGgXg");
    this.shape_45.setTransform(131.4, 40.55);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#FFFFFF")
      .s()
      .p("AgEAfIAAgaIgTgjIAMAAIALAYIAMgYIAMAAIgTAjIAAAag");
    this.shape_46.setTransform(127.075, 40.55);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#FFFFFF")
      .s()
      .p("AAOAfIgEgOIgTAAIgFAOIgKAAIATg9IAKAAIAVA9gAgGAHIANAAIgHgXg");
    this.shape_47.setTransform(122.7, 40.55);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgUALIAKgCQADAMAHAAQAEAAAEgCQACgCAAgEIgBgEIgCgCIgJgDIgJgEQgDgBgCgFQgCgDAAgFQAAgEADgFQACgEAEgCQAGgCADAAQAJAAAFAFQAEAEABAKIgKABQgBgHgCAAQgCgCgEAAQgDAAgDABQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQABABAHACQAIACAEADIAFAFQACAGAAAEQAAAIgFAGQgGAFgKAAQgRAAgDgVg",
      );
    this.shape_48.setTransform(117.675, 40.55);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#FFFFFF")
      .s()
      .p("AAKAfIgUgnIAAAnIgJAAIAAg9IAKAAIAUAoIAAgoIAJAAIAAA9g");
    this.shape_49.setTransform(260.45, 40.575);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#FFFFFF")
      .s()
      .p("AAOAfIgEgOIgUAAIgDAOIgLAAIATg9IAKAAIAUA9gAgGAGIAMAAIgGgVg");
    this.shape_50.setTransform(255.25, 40.575);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#FFFFFF")
      .s()
      .p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
    this.shape_51.setTransform(250.325, 40.575);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRAYQgGgIAAgQQAAgKADgHQADgIAFgCQAFgEAHAAQALAAAGAIQAIAJgBAOQABAPgIAJQgGAIgLAAQgJAAgIgIgAgJgPQgEAEAAALQAAAKAEAGQADAFAGAAQAGAAAEgFQAEgGAAgKQAAgKgEgFQgEgFgGAAQgGAAgDAFg",
      );
    this.shape_52.setTransform(244.7, 40.575);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AALAfIgMgXIgDgCIgFgBIgCAAIAAAaIgLAAIAAg9IAWAAQAHAAAEACQADABACAFQADAEAAAFQAAAIgEAEQgDADgHACIAGAFIAMAWgAgLgEIAHAAIAIAAIADgDIABgFIgBgEQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgHAAIgIAAg",
      );
    this.shape_53.setTransform(239.525, 40.575);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgQAYQgIgIABgQQgBgKAEgHQADgHAFgDQAFgEAHAAQAKAAAIAIQAGAIAAAPQABAPgIAJQgGAIgLAAQgKAAgGgIgAgJgPQgEAFAAAKQAAAKAEAGQAEAFAFAAQAGAAAEgFQAEgFAAgLQAAgKgDgFQgFgFgGAAQgGAAgDAFg",
      );
    this.shape_54.setTransform(233.9, 40.575);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKAcQgGgEgDgHQgEgHAAgKQAAgKAEgHQADgGAFgEQAFgEAHAAQAKAAAFAFQAFAFACAIIgKADQgBgFgDgDQgEgCgEAAQgGAAgDAFQgEAFAAAKQAAAKAEAGQAEAFAFAAIAGgBIAGgEIAAgIIgLAAIAAgJIAWAAIAAAXQgFAFgFACQgFADgHAAQgHAAgFgEg",
      );
    this.shape_55.setTransform(228.275, 40.575);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKAcQgGgEgDgHQgEgHAAgKQAAgKAEgHQADgGAFgEQAGgEAGAAQAKAAAFAFQAFAEACAJIgKADQgBgFgDgDQgEgCgEAAQgFAAgEAFQgEAFAAAKQAAAKAEAGQAEAFAFAAIAHgBIAFgEIAAgIIgLAAIAAgJIAWAAIAAAXQgFAFgFACQgFADgHAAQgHAAgFgEg",
      );
    this.shape_56.setTransform(222.675, 40.575);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#FFFFFF")
      .s()
      .p("AAKAfIgTgnIAAAnIgKAAIAAg9IAKAAIATAoIAAgoIAKAAIAAA9g");
    this.shape_57.setTransform(217.3, 40.575);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#FFFFFF")
      .s()
      .p("AgSAfIAAg9IAkAAIAAALIgaAAIAAANIAYAAIAAAKIgYAAIAAAQIAbAAIAAALg");
    this.shape_58.setTransform(212.425, 40.575);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#FFFFFF")
      .s()
      .p("AgEAfIAAgyIgPAAIAAgLIAnAAIAAALIgPAAIAAAyg");
    this.shape_59.setTransform(207.725, 40.575);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAKAfIgLgXQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgEgBIgCAAIAAAaIgLAAIAAg9IAWAAQAHAAADACQAEABADAFQABADAAAGQAAAIgDAEQgDADgGACIAEAFIANAWgAgLgEIAHAAIAIAAIADgDIABgFIgBgEQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgHAAIgHAAg",
      );
    this.shape_60.setTransform(201.1, 40.575);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#FFFFFF")
      .s()
      .p("AgSAfIAAg9IAlAAIAAALIgbAAIAAANIAZAAIAAAKIgZAAIAAAQIAbAAIAAALg");
    this.shape_61.setTransform(195.925, 40.575);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#FFFFFF")
      .s()
      .p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
    this.shape_62.setTransform(191.125, 40.575);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#FFFFFF")
      .s()
      .p("AAKAfIgUgnIAAAnIgJAAIAAg9IAKAAIATAoIAAgoIAKAAIAAA9g");
    this.shape_63.setTransform(185.65, 40.575);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#FFFFFF")
      .s()
      .p("AAOAfIgEgOIgTAAIgEAOIgLAAIAUg9IAJAAIAUA9gAgGAGIANAAIgHgVg");
    this.shape_64.setTransform(180.45, 40.575);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#FFFFFF")
      .s()
      .p("AAJAfIgMgdIgIAKIAAATIgLAAIAAg9IALAAIAAAcIATgcIANAAIgTAYIAVAlg");
    this.shape_65.setTransform(175.55, 40.55);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgEAIQAAAAABgBQAAAAABAAQAAgBABAAQAAgBABAAQAAgCAAgDIgEAAIAAgMIAJAAIAAAJQAAAHgCACQgBAEgEADg",
      );
    this.shape_66.setTransform(224.975, 34.275);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#FFFFFF")
      .s()
      .p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
    this.shape_67.setTransform(221.675, 31.1);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgQAYQgIgIAAgQQAAgIAEgJQADgHAFgDQAFgEAHAAQALAAAHAIQAHAJAAAOQAAAQgIAIQgGAIgLAAQgKAAgGgIgAgJgPQgEAFAAAKQAAALAEAFQAEAFAFAAQAGAAAEgFQAEgFAAgLQAAgKgEgFQgEgGgGABQgFgBgEAGg",
      );
    this.shape_68.setTransform(216.025, 31.1);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#FFFFFF")
      .s()
      .p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
    this.shape_69.setTransform(210.875, 31.1);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRAYQgGgHgBgRQAAgKAEgHQAEgIAEgCQAFgEAHAAQAKAAAIAIQAHAJAAAOQAAAQgIAIQgGAIgLAAQgKAAgHgIgAgJgPQgEAEAAALQAAALAEAFQAEAFAFAAQAGAAAEgFQAEgFAAgLQAAgKgEgFQgEgGgGABQgFgBgEAGg",
      );
    this.shape_70.setTransform(205.25, 31.1);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AALAfIgMgXIgDgCIgFgBIgDAAIAAAaIgKAAIAAg9IAWAAQAHAAAEACQAEACABADQADAFAAAGQAAAHgEAEQgEAEgGAAIAGAGIAMAWgAgMgEIAIAAIAIgBQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQABgCAAgDQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgIAAIgIAAg",
      );
    this.shape_71.setTransform(200.075, 31.1);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#FFFFFF")
      .s()
      .p("AgSAfIAAg9IAkAAIAAALIgaAAIAAANIAYAAIAAAJIgYAAIAAARIAbAAIAAALg");
    this.shape_72.setTransform(194.925, 31.1);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f("#FFFFFF")
      .s()
      .p("AAPAfIAAgwIgKAwIgJAAIgKgwIAAAwIgJAAIAAg9IAPAAIAIApIAJgpIAPAAIAAA9g");
    this.shape_73.setTransform(189.45, 31.1);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f("#FFFFFF")
      .s()
      .p("AAPAfIgFgOIgUAAIgDAOIgMAAIAVg9IAJAAIAUA9gAgGAHIAMAAIgGgXg");
    this.shape_74.setTransform(182.05, 31.1);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#FFFFFF")
      .s()
      .p("AAKAfIgUgoIAAAoIgJAAIAAg9IAKAAIAUAoIAAgoIAJAAIAAA9g");
    this.shape_75.setTransform(176.85, 31.1);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#FFFFFF")
      .s()
      .p("AgSAfIAAg9IAkAAIAAALIgaAAIAAANIAYAAIAAAJIgYAAIAAARIAbAAIAAALg");
    this.shape_76.setTransform(171.975, 31.1);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAKAfIgLgXIgDgCIgGgBIgCAAIAAAaIgKAAIAAg9IAWAAQAHAAADACQAFACABADQADAFAAAGQAAAGgEAFQgEAEgGAAIAGAGIAMAWgAgMgEIAIAAIAIgBIADgCQABgBAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgDgCIgIAAIgIAAg",
      );
    this.shape_77.setTransform(167.125, 31.1);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f("#FFFFFF")
      .s()
      .p("AAOAfIgEgOIgTAAIgFAOIgKAAIATg9IAKAAIAUA9gAgGAHIANAAIgHgXg");
    this.shape_78.setTransform(161.65, 31.1);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .f("#FFFFFF")
      .s()
      .p("AAJAfIgMgdIgIAKIAAATIgLAAIAAg9IALAAIAAAcIATgcIAOAAIgUAYIAVAlg");
    this.shape_79.setTransform(156.75, 31.1);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f("#FFFFFF")
      .s()
      .p("AgFAXIAAgMIALAAIAAAMgAgFgKIAAgMIALAAIAAAMg");
    this.shape_80.setTransform(215.925, 22.025);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f("#FFFFFF")
      .s()
      .p("AAMAgIgYgpIAAApIgMAAIAAg/IAMAAIAZAqIAAgqIAMAAIAAA/g");
    this.shape_81.setTransform(211.175, 21.125);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f("#FFFFFF")
      .s()
      .p("AASAgIgGgPIgYAAIgFAPIgOAAIAZg/IAMAAIAaA/gAgIAHIAQAAIgIgXg");
    this.shape_82.setTransform(204.725, 21.125);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f("#FFFFFF")
      .s()
      .p("AgFAgIAAg0IgTAAIAAgLIAxAAIAAALIgTAAIAAA0g");
    this.shape_83.setTransform(199.45, 21.125);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("#FFFFFF")
      .s()
      .p("AASAgIgGgPIgYAAIgFAPIgOAAIAZg/IAMAAIAaA/gAgIAHIAQAAIgIgXg");
    this.shape_84.setTransform(194.125, 21.125);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgOAdQgIgEgDgIQgEgHAAgKQAAgKAEgHQAFgIAHgEQAHgDAIAAQALAAAHAFQAHAFACAJIgNACQgBgFgEgCQgDgDgGAAQgHAAgGAFQgFAGAAAKQAAAKAFAGQAGAGAHAAQAEAAAEgCIAHgDIAAgJIgPAAIAAgJIAcAAIAAAYQgEAEgIADQgHADgIAAQgKAAgHgEg",
      );
    this.shape_85.setTransform(187.375, 21.125);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics
      .f("#FFFFFF")
      .s()
      .p("AANAgIgZgpIAAApIgNAAIAAg/IANAAIAaAqIAAgqIALAAIAAA/g");
    this.shape_86.setTransform(180.7, 21.125);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics.f("#FFFFFF").s().p("AgGAgIAAg/IANAAIAAA/g");
    this.shape_87.setTransform(176.25, 21.1);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AANAgIgPgXIgEgDIgJgBIAAAbIgNAAIAAg/IAbAAQAIAAAGACQAFABADAFQADAEAAAGQAAAHgFAFQgDADgJACIAHAFIAPAXgAgPgEIAUgBIAEgCQABgCAAgDQAAgEgBgBQgDgDgCAAIgJAAIgKAAg",
      );
    this.shape_88.setTransform(172.075, 21.125);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAgIAAg/IAvAAIAAALIghAAIAAAOIAfAAIAAAKIgfAAIAAARIAjAAIAAALg");
    this.shape_89.setTransform(165.65, 21.125);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYAgIAAg/IAjABQAHABADAFQAEAEAAAJQAAAGgDAEQgBACgEADQgDACgEABIgMABIgIAAIAAAYgAgKgCIAGAAQAIAAACgBIAEgDQACgCgBgDQABgDgDgDQgCgCgDgBIgJAAIgFAAg",
      );
    this.shape_90.setTransform(159.7, 21.125);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhyByQgvgvAAhDQAAhCAvgvQAwgwBCAAQBDAAAwAwQAvAvAABCQAABDgvAvQgwAwhDAAQhCAAgwgwgAhlhlQgqAqAAA7QAAA8AqAqQAqArA7AAQA8AAAqgrQArgqgBg8QABg7grgqQgqgrg8AAQg7AAgqArg",
      );
    this.shape_91.setTransform(293.8, 36.025);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics
      .f("#FFFFFF")
      .s()
      .p("AgJAnIAAgdIgcAAIAAgSIAcAAIAAgeIASAAIAAAeIAdAAIAAASIgdAAIAAAdg");
    this.shape_92.setTransform(302, 36.1);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXAwQgMgJAAgQQAAgJAEgIQAEgGAKgEQgIgDgEgHQgDgFAAgIQAAgMAIgIQAIgIAQAAQAQAAAIAIQAJAIAAAMQAAAHgEAHQgFAGgHADQAKAEAEAGQAFAHAAAJQAAAPgKAKQgKAJgPAAQgOAAgKgIgAgLAJQgDAFAAAHQAAAIAEAFQAFAFAFAAQAHAAAEgFQAEgEAAgJQAAgIgEgEQgFgFgGAAQgHAAgEAFgAgJgjQgDAEAAAGQAAAGADADQADAEAGAAQAGAAADgEQAEgDAAgGQAAgHgEgDQgDgDgGAAQgFAAgEADg",
      );
    this.shape_93.setTransform(293.225, 36.125);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics
      .f("#FFFFFF")
      .s()
      .p("AADA3IAAhOQgLALgPAFIAAgTQAIgDAKgIQAIgHAEgKIARAAIAABtg");
    this.shape_94.setTransform(284.075, 36.025);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_94 },
            { t: this.shape_93 },
            { t: this.shape_92 },
            { t: this.shape_91 },
            { t: this.shape_90 },
            { t: this.shape_89 },
            { t: this.shape_88 },
            { t: this.shape_87 },
            { t: this.shape_86 },
            { t: this.shape_85 },
            { t: this.shape_84 },
            { t: this.shape_83 },
            { t: this.shape_82 },
            { t: this.shape_81 },
            { t: this.shape_80 },
            { t: this.shape_79 },
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );
  }).prototype = getMCSymbolPrototype(lib.Clip_Group_1_Layer_3, null, null);

  (lib.Clip_Group_0_Layer_3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_3
    this.instance = new lib.Image();
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 0.3369, 0.3369);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Clip_Group_0_Layer_3, null, null);

  (lib.Scene_1_t1_png = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // t1_png
    this.instance = new lib.t1();
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 0.4798, 0.4797);

    this.instance_1 = new lib.Tween6("synched", 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(160, 239.85);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance }] }, 10)
        .to({ state: [{ t: this.instance_1 }] }, 32)
        .to({ state: [{ t: this.instance_1 }] }, 8)
        .to({ state: [{ t: this.instance_1 }] }, 69)
        .to({ state: [{ t: this.instance_1 }] }, 4)
        .to({ state: [] }, 1)
        .wait(68),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(42)
        .to({ _off: false }, 0)
        .to({ scaleX: 0.7663, scaleY: 0.7663, x: 125.45, y: 150.7 }, 8)
        .wait(69)
        .to({ startPosition: 0 }, 0)
        .to({ alpha: 0 }, 4)
        .to({ _off: true }, 1)
        .wait(68),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Scene_1_Layer_14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_14
    this.instance = new lib.Tween9("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(
      40.75,
      381.7,
      0.5609,
      0.5609,
      0,
      0,
      0,
      -119.2,
      141.8,
    );
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(64)
        .to({ _off: false }, 0)
        .to(
          { regX: -119.3, scaleX: 1.0204, scaleY: 1.0204, x: 40.65, alpha: 1 },
          6,
        )
        .to({ scaleX: 1, scaleY: 1, x: 40.7, y: 381.65 }, 2)
        .wait(120),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Scene_1_Layer_12 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_12
    this.instance = new lib.t2();
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 0.4798, 0.4797);

    this.instance_1 = new lib.Tween13("synched", 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(160, 239.85);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance }] }, 48)
        .to({ state: [{ t: this.instance_1 }] }, 71)
        .to({ state: [{ t: this.instance_1 }] }, 4)
        .to({ state: [] }, 1)
        .wait(68),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(119)
        .to({ _off: false }, 0)
        .to({ alpha: 0 }, 4)
        .to({ _off: true }, 1)
        .wait(68),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Scene_1_Layer_10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_10
    this.instance = new lib.Tween20("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(55.65, 289.65);
    this.instance.alpha = 0.25;
    this.instance._off = true;

    this.instance_1 = new lib.Tween19("synched", 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(266.7, 232.6);
    this.instance_1.alpha = 0.25;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(74)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 2)
        .to({ alpha: 0 }, 2)
        .to({ alpha: 1 }, 1)
        .to({ _off: true }, 1)
        .wait(13)
        .to({ _off: false, alpha: 0.2617 }, 0)
        .to({ alpha: 1 }, 2)
        .to({ alpha: 0 }, 2)
        .to({ alpha: 1 }, 1)
        .to({ _off: true }, 1)
        .wait(93),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(83)
        .to({ _off: false }, 0)
        .to({ scaleX: 1.3049, scaleY: 1.3049, alpha: 1 }, 2)
        .to({ scaleX: 1, scaleY: 1, alpha: 0 }, 2)
        .to({ alpha: 1 }, 1)
        .to({ _off: true }, 1)
        .wait(14)
        .to({ _off: false, alpha: 0.2383 }, 0)
        .to({ scaleX: 1.3049, scaleY: 1.3049, alpha: 1 }, 2)
        .to({ scaleX: 1, scaleY: 1, alpha: 0 }, 2)
        .to({ alpha: 1 }, 1)
        .to({ _off: true }, 1)
        .wait(83),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Scene_1_Layer_9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_9
    this.instance = new lib.Tween19("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(161.75, 234);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(73)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 2)
        .to({ alpha: 0 }, 2)
        .to({ scaleX: 1.0931, scaleY: 1.0931, alpha: 1 }, 1)
        .to({ _off: true }, 1)
        .wait(6)
        .to(
          {
            _off: false,
            regX: 0.1,
            regY: 0.1,
            scaleX: 1.781,
            scaleY: 1.781,
            x: 238.6,
            y: 308.35,
            alpha: 0.1914,
          },
          0,
        )
        .to({ x: 291.5, y: 280.1, alpha: 1 }, 2)
        .to({ startPosition: 0 }, 2)
        .to({ _off: true }, 1)
        .wait(5)
        .to(
          {
            _off: false,
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            x: 190.9,
            y: 341.6,
            alpha: 0,
          },
          0,
        )
        .to({ alpha: 1 }, 2)
        .to({ alpha: 0 }, 2)
        .to({ alpha: 1 }, 1)
        .to({ _off: true }, 1)
        .wait(4)
        .to(
          {
            _off: false,
            regX: 0.1,
            regY: 0.1,
            scaleX: 1.781,
            scaleY: 1.781,
            x: 238.6,
            y: 308.35,
            alpha: 0.1914,
          },
          0,
        )
        .to({ x: 291.5, y: 280.1, alpha: 1 }, 2)
        .to({ startPosition: 0 }, 2)
        .to({ _off: true }, 1)
        .wait(82),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Scene_1_Layer_6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_6
    this.instance = new lib.Tween17("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(298.35, 453.9);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(46)
        .to({ _off: false }, 0)
        .to({ x: 160, y: 240 }, 17, cjs.Ease.sineOut)
        .wait(56)
        .to({ startPosition: 0 }, 0)
        .to({ alpha: 0 }, 4)
        .wait(69),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Scene_1_Layer_5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_5
    this.instance = new lib.Tween18("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(7.5, 437.65);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(46)
        .to({ _off: false }, 0)
        .to({ x: 160, y: 240 }, 17, cjs.Ease.sineOut)
        .wait(56)
        .to({ startPosition: 0 }, 0)
        .to({ alpha: 0 }, 4)
        .wait(69),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Scene_1_Layer_3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_3
    this.instance = new lib.Tween16("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(160, 240);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(19)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 10)
        .wait(90)
        .to({ startPosition: 0 }, 0)
        .to({ alpha: 0 }, 4)
        .wait(69),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Scene_1_bm = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // bm
    this.instance = new lib.Tween8("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(39.85, 124, 0.4778, 0.4778);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(64)
        .to({ _off: false }, 0)
        .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 8)
        .wait(47)
        .to({ startPosition: 0 }, 0)
        .to({ alpha: 0 }, 4)
        .to({ _off: true }, 1)
        .wait(68),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Scene_1_baru_png = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // baru_png
    this.instance = new lib.Tween1("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(
      55.45,
      42.1,
      0.42,
      0.42,
      0,
      0,
      0,
      -104.5,
      -197.7,
    );
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(3)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1, scaleY: 1, x: 55.5, y: 42.15, alpha: 1 },
          8,
          cjs.Ease.sineOut,
        )
        .wait(27)
        .to({ startPosition: 0 }, 0)
        .to({ alpha: 0 }, 7)
        .to({ _off: true }, 1)
        .wait(146),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.ClipGroup_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("A4/FoIAArPMAx/AAAIAALPg");
    mask.setTransform(160, 36);

    // Layer_3_obj_
    this.Layer_3 = new lib.Clip_Group_1_Layer_3();
    this.Layer_3.name = "Layer_3";
    this.Layer_3.parent = this;
    this.Layer_3.setTransform(212.8, 36, 1, 1, 0, 0, 0, 212.8, 36);
    this.Layer_3.depth = 0;
    this.Layer_3.isAttachedToCamera = 0;
    this.Layer_3.isAttachedToMask = 0;
    this.Layer_3.layerDepth = 0;
    this.Layer_3.layerIndex = 0;
    this.Layer_3.maskLayerName = 0;

    var maskedShapeInstanceList = [this.Layer_3];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_1,
    new cjs.Rectangle(115.6, 17.8, 194.4, 36.5),
    null,
  );

  (lib.ClipGroup_0 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("AnVExIAAphIOrAAIAAJhg");
    mask.setTransform(47, 30.5);

    // Layer_3_obj_
    this.Layer_3 = new lib.Clip_Group_0_Layer_3();
    this.Layer_3.name = "Layer_3";
    this.Layer_3.parent = this;
    this.Layer_3.setTransform(47, 30.5, 1, 1, 0, 0, 0, 47, 30.5);
    this.Layer_3.depth = 0;
    this.Layer_3.isAttachedToCamera = 0;
    this.Layer_3.isAttachedToMask = 0;
    this.Layer_3.layerDepth = 0;
    this.Layer_3.layerIndex = 0;
    this.Layer_3.maskLayerName = 0;

    var maskedShapeInstanceList = [this.Layer_3];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_0,
    new cjs.Rectangle(0, 0, 94, 61),
    null,
  );

  (lib.ClipGroup = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EhgGBokMAAAjRIMDANAAAMAAADRIg");
    mask.setTransform(615.125, 669.25);

    // Layer_3_obj_
    this.Layer_3 = new lib.Clip_Group_Layer_3();
    this.Layer_3.name = "Layer_3";
    this.Layer_3.parent = this;
    this.Layer_3.setTransform(615.1, 669.2, 1, 1, 0, 0, 0, 615.1, 669.2);
    this.Layer_3.depth = 0;
    this.Layer_3.isAttachedToCamera = 0;
    this.Layer_3.isAttachedToMask = 0;
    this.Layer_3.layerDepth = 0;
    this.Layer_3.layerIndex = 0;
    this.Layer_3.maskLayerName = 0;

    var maskedShapeInstanceList = [this.Layer_3];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup,
    new cjs.Rectangle(0, 0, 1230.3, 1338.5),
    null,
  );

  (lib.ending_Layer_19 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_19
    this.instance = new lib.Tween15("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(345.55, 404.2);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(152)
        .to({ _off: false }, 0)
        .to({ x: 187.45, y: 290.2 }, 12, cjs.Ease.sineOut)
        .wait(28),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.ending_cta = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // cta
    this.instance = new lib.Tween14("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(161, 256.6, 0.3994, 0.3994, 0, 0, 0, 1, 16.6);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(139)
        .to({ _off: false }, 0)
        .to(
          {
            regX: 1.1,
            regY: 16.5,
            scaleX: 1.0331,
            scaleY: 1.0331,
            x: 161.15,
            y: 256.55,
            alpha: 1,
          },
          6,
        )
        .to({ regX: 1, scaleX: 1, scaleY: 1, x: 161, y: 256.5 }, 3)
        .wait(16)
        .to({ startPosition: 0 }, 0)
        .to(
          {
            regX: 1.1,
            regY: 16.6,
            scaleX: 0.8947,
            scaleY: 0.8947,
            x: 161.15,
            y: 256.6,
          },
          3,
        )
        .to({ regX: 1, regY: 16.5, scaleX: 1, scaleY: 1, x: 161, y: 256.5 }, 4)
        .wait(21),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.ending = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_191 = function () {
      this.___loopingOver___ = true;
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(191).call(this.frame_191).wait(1),
    );

    // Layer_19_obj_
    this.Layer_19 = new lib.ending_Layer_19();
    this.Layer_19.name = "Layer_19";
    this.Layer_19.parent = this;
    this.Layer_19.depth = 0;
    this.Layer_19.isAttachedToCamera = 0;
    this.Layer_19.isAttachedToMask = 0;
    this.Layer_19.layerDepth = 0;
    this.Layer_19.layerIndex = 0;
    this.Layer_19.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.Layer_19).wait(192));

    // cta_obj_
    this.cta = new lib.ending_cta();
    this.cta.name = "cta";
    this.cta.parent = this;
    this.cta.depth = 0;
    this.cta.isAttachedToCamera = 0;
    this.cta.isAttachedToMask = 0;
    this.cta.layerDepth = 0;
    this.cta.layerIndex = 1;
    this.cta.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.cta).wait(192));

    // Layer_16 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_133 = new cjs.Graphics().p("AygRdIAAm4MAlBAAAIAAG4g");
    var mask_graphics_134 = new cjs.Graphics().p("AygReIAAm4MAlBAAAIAAG4g");
    var mask_graphics_135 = new cjs.Graphics().p("AygReIAAm4MAlBAAAIAAG4g");
    var mask_graphics_136 = new cjs.Graphics().p("AygRfIAAm4MAlBAAAIAAG4g");
    var mask_graphics_137 = new cjs.Graphics().p("AygRfIAAm4MAlBAAAIAAG4g");
    var mask_graphics_138 = new cjs.Graphics().p("AygRfIAAm4MAlBAAAIAAG4g");
    var mask_graphics_139 = new cjs.Graphics().p("AygRgIAAm4MAlBAAAIAAG4g");
    var mask_graphics_140 = new cjs.Graphics().p("AxtRgIAAm4MAlBAAAIAAG4g");
    var mask_graphics_141 = new cjs.Graphics().p("AygDcIAAm3MAlBAAAIAAG3g");

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(133)
        .to({ graphics: mask_graphics_133, x: -86.5, y: 111.75 })
        .wait(1)
        .to({ graphics: mask_graphics_134, x: -55.75, y: 111.7844 })
        .wait(1)
        .to({ graphics: mask_graphics_135, x: -25, y: 111.8188 })
        .wait(1)
        .to({ graphics: mask_graphics_136, x: 5.75, y: 111.8531 })
        .wait(1)
        .to({ graphics: mask_graphics_137, x: 36.5, y: 111.8875 })
        .wait(1)
        .to({ graphics: mask_graphics_138, x: 67.25, y: 111.9219 })
        .wait(1)
        .to({ graphics: mask_graphics_139, x: 98, y: 111.9563 })
        .wait(1)
        .to({ graphics: mask_graphics_140, x: 123.625, y: 111.9906 })
        .wait(1)
        .to({ graphics: mask_graphics_141, x: 159.5, y: 202.05 })
        .wait(51),
    );

    // t4_obj_
    this.t4 = new lib.ending_t4();
    this.t4.name = "t4";
    this.t4.parent = this;
    this.t4.depth = 0;
    this.t4.isAttachedToCamera = 0;
    this.t4.isAttachedToMask = 0;
    this.t4.layerDepth = 0;
    this.t4.layerIndex = 2;
    this.t4.maskLayerName = 0;

    var maskedShapeInstanceList = [this.t4];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.t4).wait(192));

    // Layer_15 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_129 = new cjs.Graphics().p("AoWOBIAAm3IQtAAIAAG3g");
    var mask_1_graphics_130 = new cjs.Graphics().p("AmrOEIAAm4IQtAAIAAG4g");
    var mask_1_graphics_131 = new cjs.Graphics().p("AlAOHIAAm4IQtAAIAAG4g");
    var mask_1_graphics_132 = new cjs.Graphics().p("AjVOJIAAm4IQtAAIAAG4g");
    var mask_1_graphics_133 = new cjs.Graphics().p("AhqOMIAAm4IQtAAIAAG4g");
    var mask_1_graphics_134 = new cjs.Graphics().p("AoWDcIAAm3IQtAAIAAG3g");

    this.timeline.addTween(
      cjs.Tween.get(mask_1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(129)
        .to({ graphics: mask_1_graphics_129, x: 53.5, y: 89.75 })
        .wait(1)
        .to({ graphics: mask_1_graphics_130, x: 64.2, y: 90.005 })
        .wait(1)
        .to({ graphics: mask_1_graphics_131, x: 74.9, y: 90.26 })
        .wait(1)
        .to({ graphics: mask_1_graphics_132, x: 85.6, y: 90.515 })
        .wait(1)
        .to({ graphics: mask_1_graphics_133, x: 96.3, y: 90.77 })
        .wait(1)
        .to({ graphics: mask_1_graphics_134, x: 160.5, y: 160.05 })
        .wait(58),
    );

    // t3_obj_
    this.t3 = new lib.ending_t3();
    this.t3.name = "t3";
    this.t3.parent = this;
    this.t3.depth = 0;
    this.t3.isAttachedToCamera = 0;
    this.t3.isAttachedToMask = 0;
    this.t3.layerDepth = 0;
    this.t3.layerIndex = 3;
    this.t3.maskLayerName = 0;

    var maskedShapeInstanceList = [this.t3];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.t3).wait(192));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-5.3, -8.4, 366.40000000000003, 495.9);

  (lib.Clip_Group_Layer_3copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_3
    this.instance = new lib.ClipGroup_0();
    this.instance.parent = this;
    this.instance.setTransform(47, 30.5, 1, 1, 0, 0, 0, 47, 30.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3copy, null, null);

  (lib.Scene_1_Layer_2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.instance = new lib.ending();
    this.instance.parent = this;
    this.instance.setTransform(160, 198, 1, 1, 0, 0, 0, 160, 240);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(192));
  }).prototype = p = new cjs.MovieClip();

  (lib.Scene_1_Layer_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup();
    this.instance.parent = this;
    this.instance.setTransform(
      260.85,
      344.15,
      0.1056,
      0.1056,
      0,
      0,
      0,
      615.8,
      669.8,
    );
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(125)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 3)
        .wait(64),
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.ClipGroup_2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    mask_1.graphics.p("AnVEdIAAo5IOrAAIAAI5g");
    mask_1.setTransform(47, 30.5);

    // Layer_3_obj_
    this.Layer_3_1 = new lib.Clip_Group_Layer_3copy();
    this.Layer_3_1.name = "Layer_3_1";
    this.Layer_3_1.parent = this;
    this.Layer_3_1.setTransform(47, 30.5, 1, 1, 0, 0, 0, 47, 30.5);
    this.Layer_3_1.depth = 0;
    this.Layer_3_1.isAttachedToCamera = 0;
    this.Layer_3_1.isAttachedToMask = 0;
    this.Layer_3_1.layerDepth = 0;
    this.Layer_3_1.layerIndex = 0;
    this.Layer_3_1.maskLayerName = 0;

    var maskedShapeInstanceList = [this.Layer_3_1];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.Layer_3_1).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_2,
    new cjs.Rectangle(0, 2, 94, 57),
    null,
  );

  (lib.Scene_1_ghwlogo = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // ghwlogo
    this.instance = new lib.ClipGroup_2();
    this.instance.parent = this;
    this.instance.setTransform(55, 444, 1, 1, 0, 0, 0, 47, 30.5);

    this.instance_1 = new lib.ClipGroup_1();
    this.instance_1.parent = this;
    this.instance_1.setTransform(160, 444, 1, 1, 0, 0, 0, 160, 36);

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#040202").s().p("A4/FoIAArPMAx/AAAIAALPg");
    this.shape.setTransform(160, 444);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(192),
    );
  }).prototype = p = new cjs.MovieClip();

  // stage content:
  (lib.asset320x480LEP1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    this.___GetDepth___ = function (obj) {
      var depth = obj.depth;
      var cameraObj = this.___camera___instance;
      if (cameraObj && cameraObj.depth && obj.isAttachedToCamera) {
        depth += depth + cameraObj.depth;
      }
      return depth;
    };
    this.___needSorting___ = function () {
      for (var i = 0; i < this.getNumChildren() - 1; i++) {
        var prevDepth = this.___GetDepth___(this.getChildAt(i));
        var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
        if (prevDepth < nextDepth) return true;
      }
      return false;
    };
    this.___sortFunction___ = function (obj1, obj2) {
      return (
        this.exportRoot.___GetDepth___(obj2) -
        this.exportRoot.___GetDepth___(obj1)
      );
    };
    this.on("tick", function (event) {
      var curTimeline = event.currentTarget;
      if (curTimeline.___needSorting___()) {
        this.sortChildren(curTimeline.___sortFunction___);
      }
    });

    // timeline functions:
    this.frame_191 = function () {
      this.___loopingOver___ = true;
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(191).call(this.frame_191).wait(1),
    );

    // ghwlogo_obj_
    this.ghwlogo = new lib.Scene_1_ghwlogo();
    this.ghwlogo.name = "ghwlogo";
    this.ghwlogo.parent = this;
    this.ghwlogo.setTransform(160, 444, 1, 1, 0, 0, 0, 160, 444);
    this.ghwlogo.depth = 0;
    this.ghwlogo.isAttachedToCamera = 0;
    this.ghwlogo.isAttachedToMask = 0;
    this.ghwlogo.layerDepth = 0;
    this.ghwlogo.layerIndex = 0;
    this.ghwlogo.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.ghwlogo).wait(192));

    // Layer_1_obj_
    this.Layer_1 = new lib.Scene_1_Layer_1();
    this.Layer_1.name = "Layer_1";
    this.Layer_1.parent = this;
    this.Layer_1.depth = 0;
    this.Layer_1.isAttachedToCamera = 0;
    this.Layer_1.isAttachedToMask = 0;
    this.Layer_1.layerDepth = 0;
    this.Layer_1.layerIndex = 1;
    this.Layer_1.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(192));

    // Layer_2_obj_
    this.Layer_2 = new lib.Scene_1_Layer_2();
    this.Layer_2.name = "Layer_2";
    this.Layer_2.parent = this;
    this.Layer_2.setTransform(80, 78, 1, 1, 0, 0, 0, 80, 78);
    this.Layer_2.depth = 0;
    this.Layer_2.isAttachedToCamera = 0;
    this.Layer_2.isAttachedToMask = 0;
    this.Layer_2.layerDepth = 0;
    this.Layer_2.layerIndex = 2;
    this.Layer_2.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(192));

    // Layer_14_obj_
    this.Layer_14 = new lib.Scene_1_Layer_14();
    this.Layer_14.name = "Layer_14";
    this.Layer_14.parent = this;
    this.Layer_14.depth = 0;
    this.Layer_14.isAttachedToCamera = 0;
    this.Layer_14.isAttachedToMask = 0;
    this.Layer_14.layerDepth = 0;
    this.Layer_14.layerIndex = 3;
    this.Layer_14.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.Layer_14).wait(192));

    // bm_obj_
    this.bm = new lib.Scene_1_bm();
    this.bm.name = "bm";
    this.bm.parent = this;
    this.bm.depth = 0;
    this.bm.isAttachedToCamera = 0;
    this.bm.isAttachedToMask = 0;
    this.bm.layerDepth = 0;
    this.bm.layerIndex = 4;
    this.bm.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.bm).wait(192));

    // Layer_8_obj_
    this.Layer_8 = new lib.Scene_1_Layer_8();
    this.Layer_8.name = "Layer_8";
    this.Layer_8.parent = this;
    this.Layer_8.depth = 0;
    this.Layer_8.isAttachedToCamera = 0;
    this.Layer_8.isAttachedToMask = 0;
    this.Layer_8.layerDepth = 0;
    this.Layer_8.layerIndex = 5;
    this.Layer_8.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.Layer_8).wait(192));

    // Layer_6_obj_
    this.Layer_6 = new lib.Scene_1_Layer_6();
    this.Layer_6.name = "Layer_6";
    this.Layer_6.parent = this;
    this.Layer_6.depth = 0;
    this.Layer_6.isAttachedToCamera = 0;
    this.Layer_6.isAttachedToMask = 0;
    this.Layer_6.layerDepth = 0;
    this.Layer_6.layerIndex = 6;
    this.Layer_6.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(192));

    // Layer_7_obj_
    this.Layer_7 = new lib.Scene_1_Layer_7();
    this.Layer_7.name = "Layer_7";
    this.Layer_7.parent = this;
    this.Layer_7.depth = 0;
    this.Layer_7.isAttachedToCamera = 0;
    this.Layer_7.isAttachedToMask = 0;
    this.Layer_7.layerDepth = 0;
    this.Layer_7.layerIndex = 7;
    this.Layer_7.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.Layer_7).wait(192));

    // Layer_5_obj_
    this.Layer_5 = new lib.Scene_1_Layer_5();
    this.Layer_5.name = "Layer_5";
    this.Layer_5.parent = this;
    this.Layer_5.depth = 0;
    this.Layer_5.isAttachedToCamera = 0;
    this.Layer_5.isAttachedToMask = 0;
    this.Layer_5.layerDepth = 0;
    this.Layer_5.layerIndex = 8;
    this.Layer_5.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(192));

    // Layer_10_obj_
    this.Layer_10 = new lib.Scene_1_Layer_10();
    this.Layer_10.name = "Layer_10";
    this.Layer_10.parent = this;
    this.Layer_10.depth = 0;
    this.Layer_10.isAttachedToCamera = 0;
    this.Layer_10.isAttachedToMask = 0;
    this.Layer_10.layerDepth = 0;
    this.Layer_10.layerIndex = 9;
    this.Layer_10.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.Layer_10).wait(192));

    // Layer_9_obj_
    this.Layer_9 = new lib.Scene_1_Layer_9();
    this.Layer_9.name = "Layer_9";
    this.Layer_9.parent = this;
    this.Layer_9.depth = 0;
    this.Layer_9.isAttachedToCamera = 0;
    this.Layer_9.isAttachedToMask = 0;
    this.Layer_9.layerDepth = 0;
    this.Layer_9.layerIndex = 10;
    this.Layer_9.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.Layer_9).wait(192));

    // Layer_3_obj_
    this.Layer_3 = new lib.Scene_1_Layer_3();
    this.Layer_3.name = "Layer_3";
    this.Layer_3.parent = this;
    this.Layer_3.depth = 0;
    this.Layer_3.isAttachedToCamera = 0;
    this.Layer_3.isAttachedToMask = 0;
    this.Layer_3.layerDepth = 0;
    this.Layer_3.layerIndex = 11;
    this.Layer_3.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(192));

    // Layer_13 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_48 = new cjs.Graphics().p("A4CIYIAAnuMAu/AAAIAAHug");
    var mask_graphics_49 = new cjs.Graphics().p("A3fIYIAAnuMAu/AAAIAAHug");
    var mask_graphics_50 = new cjs.Graphics().p("A3fIYIAAnuMAu/AAAIAAHug");
    var mask_graphics_51 = new cjs.Graphics().p("A3fIYIAAnuMAu/AAAIAAHug");
    var mask_graphics_52 = new cjs.Graphics().p("A3fIYIAAnuMAu/AAAIAAHug");
    var mask_graphics_53 = new cjs.Graphics().p("A3fIYIAAnuMAu/AAAIAAHug");
    var mask_graphics_54 = new cjs.Graphics().p("A3fIYIAAnuMAu/AAAIAAHug");
    var mask_graphics_55 = new cjs.Graphics().p("A3fIYIAAnuMAu/AAAIAAHug");
    var mask_graphics_56 = new cjs.Graphics().p("A3fIYIAAnuMAu/AAAIAAHug");
    var mask_graphics_57 = new cjs.Graphics().p("A3fIYIAAnuMAu/AAAIAAHug");
    var mask_graphics_58 = new cjs.Graphics().p("A3fD3IAAntMAu/AAAIAAHtg");
    var mask_graphics_119 = new cjs.Graphics().p("A3fD3IAAntMAu/AAAIAAHtg");
    var mask_graphics_120 = new cjs.Graphics().p("A3fD3IAAntMAu/AAAIAAHtg");
    var mask_graphics_121 = new cjs.Graphics().p("A3fD3IAAntMAu/AAAIAAHtg");
    var mask_graphics_122 = new cjs.Graphics().p("A3fD3IAAntMAu/AAAIAAHtg");
    var mask_graphics_123 = new cjs.Graphics().p("A3fD3IAAntMAu/AAAIAAHtg");

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(48)
        .to({ graphics: mask_graphics_48, x: -153.875, y: 53.65 })
        .wait(1)
        .to({ graphics: mask_graphics_49, x: -126.325, y: 53.65 })
        .wait(1)
        .to({ graphics: mask_graphics_50, x: -95.275, y: 53.65 })
        .wait(1)
        .to({ graphics: mask_graphics_51, x: -64.175, y: 53.65 })
        .wait(1)
        .to({ graphics: mask_graphics_52, x: -33.125, y: 53.65 })
        .wait(1)
        .to({ graphics: mask_graphics_53, x: -2.075, y: 53.65 })
        .wait(1)
        .to({ graphics: mask_graphics_54, x: 28.975, y: 53.65 })
        .wait(1)
        .to({ graphics: mask_graphics_55, x: 60.025, y: 53.65 })
        .wait(1)
        .to({ graphics: mask_graphics_56, x: 91.125, y: 53.65 })
        .wait(1)
        .to({ graphics: mask_graphics_57, x: 122.175, y: 53.65 })
        .wait(1)
        .to({ graphics: mask_graphics_58, x: 153.225, y: 82.6 })
        .wait(61)
        .to({ graphics: mask_graphics_119, x: 153.225, y: 82.6 })
        .wait(1)
        .to({ graphics: mask_graphics_120, x: 153.225, y: 82.6 })
        .wait(1)
        .to({ graphics: mask_graphics_121, x: 153.225, y: 82.6 })
        .wait(1)
        .to({ graphics: mask_graphics_122, x: 153.225, y: 82.6 })
        .wait(1)
        .to({ graphics: mask_graphics_123, x: 153.225, y: 82.6 })
        .wait(1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(68),
    );

    // Layer_12_obj_
    this.Layer_12 = new lib.Scene_1_Layer_12();
    this.Layer_12.name = "Layer_12";
    this.Layer_12.parent = this;
    this.Layer_12.depth = 0;
    this.Layer_12.isAttachedToCamera = 0;
    this.Layer_12.isAttachedToMask = 0;
    this.Layer_12.layerDepth = 0;
    this.Layer_12.layerIndex = 12;
    this.Layer_12.maskLayerName = 0;

    var maskedShapeInstanceList = [this.Layer_12];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.Layer_12).wait(192));

    // Layer_11 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_10 = new cjs.Graphics().p("A2mJ0IAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_11 = new cjs.Graphics().p("A2mJ0IAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_12 = new cjs.Graphics().p("A2mJ0IAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_13 = new cjs.Graphics().p("A2mJ0IAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_14 = new cjs.Graphics().p("A2mJ0IAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_15 = new cjs.Graphics().p("A2mJ0IAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_16 = new cjs.Graphics().p("A2mJ0IAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_17 = new cjs.Graphics().p("A2mJ0IAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_18 = new cjs.Graphics().p("A2mJ0IAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_19 = new cjs.Graphics().p("A2mJ0IAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_20 = new cjs.Graphics().p("A2mFFIAAqJMAtNAAAIAAKJg");
    var mask_1_graphics_42 = new cjs.Graphics().p("A2mFFIAAqJMAtNAAAIAAKJg");
    var mask_1_graphics_43 = new cjs.Graphics().p("A2mJOIAAqJMAtNAAAIAAKJg");
    var mask_1_graphics_44 = new cjs.Graphics().p("A2mInIAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_45 = new cjs.Graphics().p("A2mIBIAAqJMAtNAAAIAAKJg");
    var mask_1_graphics_46 = new cjs.Graphics().p("A2mHaIAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_47 = new cjs.Graphics().p("A2mG0IAAqJMAtNAAAIAAKJg");
    var mask_1_graphics_48 = new cjs.Graphics().p("A2mGNIAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_49 = new cjs.Graphics().p("A2mFnIAAqJMAtNAAAIAAKJg");
    var mask_1_graphics_50 = new cjs.Graphics().p("A2mFFIAAqJMAtNAAAIAAKJg");
    var mask_1_graphics_119 = new cjs.Graphics().p("A2mFjIAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_120 = new cjs.Graphics().p("A2mFjIAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_121 = new cjs.Graphics().p("A2mFjIAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_122 = new cjs.Graphics().p("A2mFjIAAqIMAtNAAAIAAKIg");
    var mask_1_graphics_123 = new cjs.Graphics().p("A2mFjIAAqIMAtNAAAIAAKIg");

    this.timeline.addTween(
      cjs.Tween.get(mask_1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(10)
        .to({ graphics: mask_1_graphics_10, x: -137.625, y: 62.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_11, x: -109.675, y: 62.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_12, x: -81.725, y: 62.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_13, x: -53.775, y: 62.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_14, x: -25.825, y: 62.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_15, x: 2.125, y: 62.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_16, x: 30.125, y: 62.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_17, x: 58.075, y: 62.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_18, x: 86.025, y: 62.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_19, x: 113.975, y: 62.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_20, x: 141.925, y: 93.175 })
        .wait(22)
        .to({ graphics: mask_1_graphics_42, x: 141.925, y: 93.175 })
        .wait(1)
        .to({ graphics: mask_1_graphics_43, x: 141.925, y: 58.975 })
        .wait(1)
        .to({ graphics: mask_1_graphics_44, x: 141.925, y: 55.125 })
        .wait(1)
        .to({ graphics: mask_1_graphics_45, x: 141.925, y: 51.275 })
        .wait(1)
        .to({ graphics: mask_1_graphics_46, x: 141.925, y: 47.425 })
        .wait(1)
        .to({ graphics: mask_1_graphics_47, x: 141.925, y: 43.575 })
        .wait(1)
        .to({ graphics: mask_1_graphics_48, x: 141.925, y: 39.725 })
        .wait(1)
        .to({ graphics: mask_1_graphics_49, x: 141.925, y: 35.875 })
        .wait(1)
        .to({ graphics: mask_1_graphics_50, x: 141.925, y: 31.575 })
        .wait(69)
        .to({ graphics: mask_1_graphics_119, x: 141.925, y: 35.525 })
        .wait(1)
        .to({ graphics: mask_1_graphics_120, x: 141.925, y: 35.525 })
        .wait(1)
        .to({ graphics: mask_1_graphics_121, x: 141.925, y: 35.525 })
        .wait(1)
        .to({ graphics: mask_1_graphics_122, x: 141.925, y: 35.525 })
        .wait(1)
        .to({ graphics: mask_1_graphics_123, x: 141.925, y: 35.525 })
        .wait(1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(68),
    );

    // t1_png_obj_
    this.t1_png = new lib.Scene_1_t1_png();
    this.t1_png.name = "t1_png";
    this.t1_png.parent = this;
    this.t1_png.depth = 0;
    this.t1_png.isAttachedToCamera = 0;
    this.t1_png.isAttachedToMask = 0;
    this.t1_png.layerDepth = 0;
    this.t1_png.layerIndex = 13;
    this.t1_png.maskLayerName = 0;

    var maskedShapeInstanceList = [this.t1_png];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.t1_png).wait(192));

    // baru_png_obj_
    this.baru_png = new lib.Scene_1_baru_png();
    this.baru_png.name = "baru_png";
    this.baru_png.parent = this;
    this.baru_png.depth = 0;
    this.baru_png.isAttachedToCamera = 0;
    this.baru_png.isAttachedToMask = 0;
    this.baru_png.layerDepth = 0;
    this.baru_png.layerIndex = 14;
    this.baru_png.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.baru_png).wait(192));

    // Layer_4_obj_
    this.Layer_4 = new lib.Scene_1_Layer_4();
    this.Layer_4.name = "Layer_4";
    this.Layer_4.parent = this;
    this.Layer_4.setTransform(160, 240, 1, 1, 0, 0, 0, 160, 240);
    this.Layer_4.depth = 0;
    this.Layer_4.isAttachedToCamera = 0;
    this.Layer_4.isAttachedToMask = 0;
    this.Layer_4.layerDepth = 0;
    this.Layer_4.layerIndex = 15;
    this.Layer_4.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(192));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(7.5, 198, 450.9, 495.9);
  // library properties:
  lib.properties = {
    id: "2E8206AB63DF7544AD8CCAFE98EAB010",
    width: 320,
    height: 480,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "assets/images/Asset1.png", id: "Asset1" },
      { src: "assets/images/baru.png", id: "baru" },
      { src: "assets/images/BM_03.png", id: "BM_03" },
      { src: "assets/images/cursor.png", id: "cursor" },
      { src: "assets/images/flare.png", id: "flare" },
      { src: "assets/images/frame1.png", id: "frame1" },
      { src: "assets/images/Image.jpg", id: "Image" },
      { src: "assets/images/indomaret.png", id: "indomaret" },
      { src: "assets/images/lefthand.png", id: "lefthand" },
      { src: "assets/images/righthand.png", id: "righthand" },
      { src: "assets/images/t1.png", id: "t1" },
      { src: "assets/images/t2.png", id: "t2" },
      { src: "assets/images/visit.png", id: "visit" },
    ],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["2E8206AB63DF7544AD8CCAFE98EAB010"] = {
    getStage: function () {
      return exportRoot.getStage();
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  // Layer depth API :

  AdobeAn.Layer = new (function () {
    this.getLayerZDepth = function (timeline, layerName) {
      if (layerName === "Camera") layerName = "___camera___instance";
      var script =
        "if(timeline." +
        layerName +
        ") timeline." +
        layerName +
        ".depth; else 0;";
      return eval(script);
    };
    this.setLayerZDepth = function (timeline, layerName, zDepth) {
      const MAX_zDepth = 10000;
      const MIN_zDepth = -5000;
      if (zDepth > MAX_zDepth) zDepth = MAX_zDepth;
      else if (zDepth < MIN_zDepth) zDepth = MIN_zDepth;
      if (layerName === "Camera") layerName = "___camera___instance";
      var script =
        "if(timeline." +
        layerName +
        ") timeline." +
        layerName +
        ".depth = " +
        zDepth +
        ";";
      eval(script);
    };
    this.removeLayer = function (timeline, layerName) {
      if (layerName === "Camera") layerName = "___camera___instance";
      var script =
        "if(timeline." +
        layerName +
        ") timeline.removeChild(timeline." +
        layerName +
        ");";
      eval(script);
    };
    this.addNewLayer = function (timeline, layerName, zDepth) {
      if (layerName === "Camera") layerName = "___camera___instance";
      zDepth = typeof zDepth !== "undefined" ? zDepth : 0;
      var layer = new createjs.MovieClip();
      layer.name = layerName;
      layer.depth = zDepth;
      layer.layerIndex = 0;
      timeline.addChild(layer);
    };
  })();
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
