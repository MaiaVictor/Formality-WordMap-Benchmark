const { Map, List } = require('immutable');

// The WordMap library compiled from Formality to JavaScript
M = (function(){
  var _WordMap$Word = undefined;
  var _WordMap$WordMap = (_0=>undefined);
  var _WordMap$wnil = (_0=>(_1=>(_2=>(_3=>_0))));
  var _WordMap$wval = (_0=>(_1=>(_2=>(_3=>(_4=>_2(_0))))));
  var _WordMap$wbin = (_0=>(_1=>(_2=>(_3=>(_4=>(_5=>_4(_0)(_1)))))));
  var _WordMap$wext = (_0=>(_1=>(_2=>(_3=>(_4=>(_5=>(_6=>_6(_0)(_1)(_2))))))));
  var _WordMap$shared_len = (_0=>(_1=>(_2=>(_3=>(((_0===0? 1 : 0)|((_2===0? 1 : 0)|((_1^_3)&1)))?0:(1+_WordMap$shared_len((_0-1))((_1>>>1))((_2-1))((_3>>>1))))))));
  var _WordMap$winsert = (_0=>(_1=>(_2=>(_3=>_3((_4=>(_5=>(_6=>(_7=>_WordMap$wext(_5)(_6)(_WordMap$wval(_7)))))))((_4=>(_5=>(_6=>(_7=>(_8=>_WordMap$wext(_6)(_7)(_WordMap$wval(_8))))))))((_4=>(_5=>(_6=>(_7=>(_8=>(_9=>(((_8&1)===0? 1 : 0)?(_10=>(_11=>(_12=>_WordMap$wbin(_10(_11))(_12)))):(_10=>(_11=>(_12=>_WordMap$wbin(_11)(_10(_12))))))(_6((_7-1))((_8>>>1))(_9))(_4)(_5))))))))((_4=>(_5=>(_6=>(_7=>(_8=>(_9=>(_10=>((_WordMap$shared_len(_8)(_9)(_4)(_5)===_4? 1 : 0)?(_11=>(_12=>_WordMap$wext(_4)(_5)(_7((_8-_WordMap$shared_len(_8)(_9)(_4)(_5)))((_9>>>_WordMap$shared_len(_8)(_9)(_4)(_5)))(_11)(_12)))):(_11=>(_12=>_WordMap$wext(_WordMap$shared_len(_8)(_9)(_4)(_5))(_9)(((((_9>>>_WordMap$shared_len(_8)(_9)(_4)(_5))&1)===0? 1 : 0)?(_13=>(_14=>_WordMap$wbin(_13)(_14))):(_13=>(_14=>_WordMap$wbin(_14)(_13))))(_WordMap$wext((_8-(_WordMap$shared_len(_8)(_9)(_4)(_5)+1)))((_9>>>(_WordMap$shared_len(_8)(_9)(_4)(_5)+1)))(_WordMap$wval(_11)))(_WordMap$wext((_4-(_WordMap$shared_len(_8)(_9)(_4)(_5)+1)))((_5>>>(_WordMap$shared_len(_8)(_9)(_4)(_5)+1)))(_12))))))(_10)(_6)))))))))(_WordMap$winsert)(_0)(_1)(_2)))));
  var _Maybe$none = (_4=>(_5=>_4));
  var _Maybe$some = (_5=>(_6=>(_7=>_7(_5))));
  var _WordMap$wlookup = (_0=>(_1=>(_2=>_2((_3=>_Maybe$none))((_3=>(_4=>_Maybe$some(_3))))((_3=>(_4=>(_5=>(((_1&1)===0? 1 : 0)?_5((_0-1))((_1>>>1))(_3):_5((_0-1))((_1>>>1))(_4))))))((_3=>(_4=>(_5=>(_6=>_6((_0-_3))((_1>>>_3))(_5))))))(_WordMap$wlookup))));
  var _List$cons = (_1=>(_2=>(_3=>(_4=>_4(_1)(_2)))));
  var _List$nil = (_1=>(_2=>_1));
  var _List$concat = (_2=>(_3=>_2((_4=>_4))((_4=>(_5=>(_6=>_List$cons(_4)(_List$concat(_5)(_6))))))(_3)));
  var _Number$digit_to_char = (_7=>((_7<10)?(_7+48):((_7-10)+97)));
  var _Number$number_to_string_aux = (_4=>(_5=>((_5===0? 1 : 0)?(_6=>_6):(_6=>_Number$number_to_string_aux(_4)(((_5/_4)|0))(_List$cons(_Number$digit_to_char((_5%_4)))(_6))))));
  var _Number$number_to_string = (_2=>(_3=>((_3===0? 1 : 0)?_List$cons(48)(_List$nil):_Number$number_to_string_aux(_2)(_3)(_List$nil))));
  var _WordMap$bshow = (_4=>(_5=>((_4===0? 1 : 0)?_List$nil:(((_5&1)===0? 1 : 0)?_List$cons(48)(_WordMap$bshow((_4-1))((_5>>>1))):_List$cons(49)(_WordMap$bshow((_4-1))((_5>>>1)))))));
  var _WordMap$wshow = (_0=>_0(_List$cons(42)(_List$nil))((_1=>_List$concat(_List$cons(40)(_List$nil))(_List$concat(_Number$number_to_string(10)(_1))(_List$cons(41)(_List$nil)))))((_1=>(_2=>_List$concat(_List$cons(91)(_List$nil))(_List$concat(_WordMap$wshow(_1))(_List$concat(_List$cons(124)(_List$nil))(_List$concat(_WordMap$wshow(_2))(_List$cons(93)(_List$nil))))))))((_1=>(_2=>(_3=>_List$concat(_WordMap$bshow(_1)(_2))(_WordMap$wshow(_3)))))));
  var _Bits$be = (_2=>(_3=>(_4=>_2)));
  var _Bits$b1 = (_2=>(_3=>(_4=>(_5=>_5(_2)))));
  var _Bits$b0 = (_2=>(_3=>(_4=>(_5=>_4(_2)))));
  var _WordMap$number_to_bits = (_0=>(_1=>((_0===0? 1 : 0)?_Bits$be:((_1&1)?_Bits$b1(_WordMap$number_to_bits((_0-1))((_1>>>1))):_Bits$b0(_WordMap$number_to_bits((_0-1))((_1>>>1)))))));
  var _Map$empty = (_0=>(_1=>_0));
  var _WordMap$mnil = _Map$empty;
  var _Map$lookup = (_3=>(_4=>_3((_5=>(_6=>_5(_Maybe$none)((_7=>(_8=>(_9=>_7)))))))((_5=>(_6=>(_7=>_6(_Maybe$none)((_8=>(_9=>(_10=>_7(_5)(_9)))))))))((_5=>(_6=>(_7=>_6(_Maybe$none)((_8=>(_9=>(_10=>_7(_5)(_10)))))))))(_4)(_Map$lookup)));
  var _WordMap$mlookup = (_0=>(_1=>(_2=>_Map$lookup(_WordMap$number_to_bits(_0)(_1))(_2))));
  var _Map$multi = (_11=>(_12=>(_13=>(_14=>(_15=>_15(_11)(_12)(_13))))));
  var _Map$insert = (_4=>(_5=>(_6=>_4((_7=>(_8=>(_9=>_8((_10=>_Map$multi(_10)(_Map$empty)(_Map$empty)))((_10=>(_11=>(_12=>(_13=>_Map$multi(_13)(_11)(_12))))))(_Maybe$some(_7))))))((_7=>(_8=>(_9=>(_10=>_9((_11=>_Map$multi(_Maybe$none)(_11(_Map$empty))(_Map$empty)))((_11=>(_12=>(_13=>(_14=>_Map$multi(_11)(_14(_12))(_13))))))(_10(_7)(_8)))))))((_7=>(_8=>(_9=>(_10=>_9((_11=>_Map$multi(_Maybe$none)(_Map$empty)(_11(_Map$empty))))((_11=>(_12=>(_13=>(_14=>_Map$multi(_11)(_12)(_14(_13)))))))(_10(_7)(_8)))))))(_5)(_6)(_Map$insert))));
  var _WordMap$minsert = (_0=>(_1=>(_2=>(_3=>_Map$insert(_WordMap$number_to_bits(_0)(_1))(_2)(_3)))));
  return {
    'Word':_WordMap$Word,
    'WordMap':_WordMap$WordMap,
    'wnil':_WordMap$wnil,
    'wval':_WordMap$wval,
    'wbin':_WordMap$wbin,
    'wext':_WordMap$wext,
    'shared_len':_WordMap$shared_len,
    'winsert':_WordMap$winsert,
    'wlookup':_WordMap$wlookup,
    'wshow':_WordMap$wshow,
    'bshow':_WordMap$bshow,
    'number_to_bits':_WordMap$number_to_bits,
    'mnil':_WordMap$mnil,
    'mlookup':_WordMap$mlookup,
    'minsert':_WordMap$minsert
  };
})()

// JavaScript: same algorithm with objects
const J = (function () {
  // Constructors
  const wnil = ({ctor: "wnil"});
  const wval = val => ({ctor: "wval", val});
  const wbin = (lft, rgt) => ({ctor: "wbin", lft, rgt});
  const wext = (len, key, map) => ({ctor: "wext", len, key, map});

  function shared_len(al, a, bl, b) {
    if (al === 0 || bl === 0 || ((a ^ b) & 1)) {
      return 0;
    } else {
      return 1 + shared_len(al - 1, a >>> 1, bl - 1, b >>> 1);
    }
  };

  function winsert(len, key, val, wm) {
    switch (wm.ctor) {
      case "wnil":
        return wext(len, key, wval(val));
      case "wval":
        return wext(len, key, wval(val));
      case "wbin":
        var fun = (key & 1) === 0
          ? (ins, lft, rgt) => wbin(ins(lft), rgt)
          : (ins, lft, rgt) => wbin(lft, ins(rgt));
        var ins = (x) => winsert(len - 1, key >>> 1, val, x);
        return fun(ins, wm.lft, wm.rgt);
      case "wext":
        var slen = shared_len(len, key, wm.len, wm.key);
        if (slen === wm.len) {
          return wext(wm.len, wm.key, winsert(len - slen, key >>> slen, val, wm.map))
        } else {
          var dbit = (key >>> slen) & 1;
          var dlen = slen + 1;
          var wfun = dbit === 0 ? (a,b) => wbin(a,b) : (a,b) => wbin(b,a);
          return wext(slen, key, wfun(
            wext(len - dlen, key >>> dlen, wval(val)),
            wext(wm.len - dlen, wm.key >>> dlen, wm.map)));
        }
    };
  };

  function wlookup(len, key, wm) {
    switch (wm.ctor) {
      case "wnil": return null;
      case "wval": return wm.val;
      case "wbin":
        if ((key & 1) === 0) {
          return wlookup(len - 1, key >>> 1, wm.lft);
        } else {
          return wlookup(len - 1, key >>> 1, wm.rgt);
        }
      case "wext":
        return wlookup(len - wm.len, key >>> wm.len, wm.map);
    }
  }

  return {wnil, winsert, wlookup};
})();

// JavaScript same algorithm, except manually optimized. Not
// very relevant for the comparison since it does extreme
// things, even using lookup bit tables, which are not done
// at all by the Formality version. But interesting still.
const F = (function () {
  const WNIL = 0;
  const WVAL = 1;
  const WBIN = 2;
  const WEXT = 3;
  var wnil = ({ctr:WNIL});
  var wval = (val) => ({ctr:WVAL, val});
  var wbin = (lft, rgt) => ({ctr:WBIN, lft, rgt});
  var wext = (len, key, map) => ({ctr:WEXT, len, key, map});

  // https://stackoverflow.com/a/21624571/1031791
  var first_set_bit_lookup_table = [
    0, 1, 28, 2, 29, 14, 24, 3, 30, 22, 20, 15, 25, 17, 4, 8, 
    31, 27, 13, 23, 21, 19, 16, 7, 26, 12, 18, 6, 11, 5, 10, 9
  ];
  const winsert = (len, key, val, wm) => {
    //var r = ((x)=>x);
    var r = {val: null};
    var s = r;
    var k = "val";

    while (true) {
      switch (wm.ctr) {
        case WNIL:
          s[k] = wext(len, key, wval(val));
          return r.val;
        case WVAL:
          s[k] = wext(len, key, wval(val));
          return r.val;
        case WBIN:
          if ((key & 1) === 0) {
            len  = len - 1;
            key  = key >>> 1;
            s[k] = wbin(null, wm.rgt);
            s    = s[k];
            k    = "lft";
            //r    = ((r,rgt) => x => r(wbin(x, rgt)))(r,wm.rgt);
            wm   = wm.lft;
            //return wbin(winsert(len-1, key>>>1, val, wm.lft), wm.rgt);
            //return winsert(len-1, key>>>1, val, wm.lft, x => r(wbin(x, wm.rgt)));
          } else {
            len  = len - 1;
            key  = key >>> 1;
            //r   = ((r,lft) => x => r(wbin(lft, x)))(r,wm.lft);
            s[k] = wbin(wm.lft, null);
            s    = s[k];
            k    = "rgt";
            wm   = wm.rgt;
            //return wbin(wm.lft, winsert(len-1, key>>>1, val, wm.rgt));
            //return winsert(len-1, key>>>1, val, wm.rgt, x => r(wbin(wm.lft, x)));
          }
          break;
        case WEXT:

          var p = key ^ wm.key;
          var q = ((p & -p) * 0x077CB531) >>> 27;
          //var slen = Math.min(Math.min(first_set_bit_lookup_table[q], len), wm.len);
          var slen = first_set_bit_lookup_table[q];
          var slen = slen > wm.len ? wm.len : slen;
          var slen = slen > len ? len : slen;

          //var slen = 0;
          //var l0 = len;
          //var k0 = l0 === 0 ? 0 : key & (0xFFFFFFFF >>> (32-l1))
          //var l1 = wm.len;
          //var k1 = l1 === 0 ? 0 : wm.key & (0xFFFFFFFF >>> (32-l1))
          //while (l0 > 0 && l1 > 0 && (k0&1) === (k1&1)) {
            //slen++;
            //l0--;
            //l1--;
            //k0 = k0 >>> 1;
            //k1 = k1 >>> 1;
          //}

          //console.log("->", slen, slen2);

          if (slen === wm.len) {
            //return wext(wm.len, wm.key, winsert(len - slen, key >>> slen, val, wm.map));
            len  = len - slen;
            key  = key >>> slen;
            s[k] = wext(wm.len, wm.key, null);
            s    = s[k];
            k    = "map";
            wm   = wm.map;
          } else {
            var dbit = (key >>> slen) & 1;
            var dlen = slen + 1;
            if (dbit === 0) {
              s[k] = wext(slen, key, wbin(
                wext(   len - dlen,    key >>> dlen, wval(val)),
                wext(wm.len - dlen, wm.key >>> dlen, wm.map)));
              return r.val;
            } else {
              s[k] = wext(slen, key, wbin(
                wext(wm.len - dlen, wm.key >>> dlen, wm.map),
                wext(   len - dlen,    key >>> dlen, wval(val))));
              return r.val;
            }
          }
          break;
      }
    }
  };


  const wlookup = (len, key, wm) => {
    while (true) {
      switch (wm.ctr) {
        case WNIL:
          return null;
        case WVAL:
          return wm.val;
        case WBIN:
          if ((key & 1) === 0) {
            len = len - 1;
            key = key >>> 1;
            wm  = wm.lft;
          } else {
            len = len - 1;
            key = key >>> 1;
            wm  = wm.rgt;
          }
          break;
        case WEXT:
          len = len - wm.llen;
          key = key >>> wm.len;
          wm  = wm.map;
          break;
      }
    }
  };

  return {wnil, winsert, wlookup};
})();

// Inserting and looking up elements from a WordMap
function wordmap_fm(L) {
  // WordMap.fm
  var m = M.wnil;
  for (var i = 0; i < L; ++i) {
    m = M.winsert(32)(i)(i)(m);
  }
  var s = 0;
  for (var i = 0; i < L; ++i) {
    s += M.wlookup(32)(i)(m)(null)(x => x);
  }
  return s;
};

// The same algorithm with native JS objs
function wordmap_js(L) {
  var m = J.wnil;
  for (var i = 0; i < L; ++i) {
    m = J.winsert(32,i,i,m);
  }
  var s = 0;
  for (var i = 0; i < L; ++i) {
    s += J.wlookup(32,i,m);
  }
  return s;
};

// The same algorithm with native JS objs
function wordmap_opt_js(L) {
  var m = F.wnil;
  for (var i = 0; i < L; ++i) {
    m = F.winsert(32,i,i,m);
  }
  var s = 0;
  for (var i = 0; i < L; ++i) {
    s += F.wlookup(32,i,m);
  }
  return s;
};

function wordmap_immutable_js(L) {
  var m = Map();
  for (var i = 0; i < L; ++i) {
    m = m.set(i,i);
  }
  var s = 0;
  for (var i = 0; i < L; ++i) {
    s += m.get(i);
  }
  return s;
};

module.exports = {
  wordmap_immutable_js,
  wordmap_opt_js,
  wordmap_js,
  wordmap_fm,
};
