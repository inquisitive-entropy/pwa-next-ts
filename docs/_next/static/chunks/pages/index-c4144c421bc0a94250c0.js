_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [6],
  {
    '/EDR': function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t('QeBL');
        }
      ]);
    },
    QeBL: function (e, r, t) {
      'use strict';
      t.r(r);
      var n = t('nKUr'),
        o = t('cpVT');
      function c(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              c = Object.keys(e);
            for (n = 0; n < c.length; n++) (t = c[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (n = 0; n < c.length; n++)
            (t = c[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
        }
        return o;
      }
      function a(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function i(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? a(Object(t), !0).forEach(function (r) {
                Object(o.a)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      var u = {
          default: 'border-gray-300 bg-gray-200 hover:bg-gray-300 hover:shadow-md text-gray-800',
          primary: 'bg-blue-600 hover:bg-blue-700 hover:shadow-md text-white',
          secondary: 'bg-red-600 hover:bg-red-700 hover:shadow-md text-white'
        },
        b = function (e) {
          var r = e.variant,
            t = void 0 === r ? 'default' : r,
            o = e.label,
            a = c(e, ['variant', 'label']);
          return Object(n.jsx)(
            'button',
            i(i({}, a), {}, { className: 'shadow border font-normal py-2 px-4 rounded-md '.concat(u[t]), children: o })
          );
        };
      r.default = function () {
        return Object(n.jsx)(b, { label: 'Hello World' });
      };
    },
    Qetd: function (e, r, t) {
      'use strict';
      var n = Object.assign.bind(Object);
      (e.exports = n), (e.exports.default = e.exports);
    },
    cpVT: function (e, r, t) {
      'use strict';
      function n(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[r] = t),
          e
        );
      }
      t.d(r, 'a', function () {
        return n;
      });
    }
  },
  [['/EDR', 0, 1]]
]);
