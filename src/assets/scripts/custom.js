setTimeout(function () {
    var _0x77b9x1 = document['getElementById']('preloader');
    if (_0x77b9x1) {
        _0x77b9x1['classList']['add']('preloader-hide')
    }
}, 150);
document['addEventListener']('DOMContentLoaded', () => {
    'use strict';
    var _0x77b9x4 = 'Appkit';
    var _0x77b9x6 = false;
    function _0x77b9x9() {
        // ERROR HERE
        var _0x77b9xd = document['getElementsByClassName']('menu-hider');
        if (!_0x77b9xd['length']) {
            document['body']['innerHTML'] += '<div class=\"menu-hider\"></div>'
        };
        if (_0x77b9xd[0]['classList']['contains']('menu-active')) {
            _0x77b9xd[0]['classList']['remove']('menu-active')
        };
        document['querySelectorAll']('.menu')['forEach']((_0x77b9xc) => {
            _0x77b9xc['style']['display'] = 'block'
        });
        // ERROR HERE
        var _0x77b9xe = document['querySelectorAll']('input');
        if (_0x77b9xe['length']) {
            var _0x77b9xf = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            var _0x77b9x10 = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            var _0x77b9x11 = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
            var _0x77b9x12 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
            var _0x77b9x13 = /^(0|[1-9]\d*)$/;
            var _0x77b9x14 = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
            var _0x77b9x15 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;

            function _0x77b9x16(_0x77b9xc) {
                _0x77b9xc['parentElement']['querySelectorAll']('.valid')[0]['classList']['remove']('disabled');
                _0x77b9xc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['add']('disabled')
            }

            function _0x77b9x17(_0x77b9xc) {
                _0x77b9xc['parentElement']['querySelectorAll']('.valid')[0]['classList']['add']('disabled');
                _0x77b9xc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['remove']('disabled')
            }

            function _0x77b9x18(_0x77b9xc) {
                _0x77b9xc['parentElement']['querySelectorAll']('em')[0]['classList']['remove']('disabled');
                _0x77b9xc['parentElement']['querySelectorAll']('.valid')[0]['classList']['add']('disabled');
                _0x77b9xc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['add']('disabled')
            }
            var _0x77b9x19 = document['querySelectorAll']('.input-style input:not([type=\"date\"])');
            _0x77b9x19['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('keyup', (_0x77b9xb) => {
                    if (!_0x77b9xc['value'] == '') {
                        _0x77b9xc['parentElement']['classList']['add']('input-style-active');
                        _0x77b9xc['parentElement']['querySelector']('em')['classList']['add']('disabled')
                    } else {
                        _0x77b9xc['parentElement']['querySelectorAll']('.valid')[0]['classList']['add']('disabled');
                        _0x77b9xc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['add']('disabled');
                        _0x77b9xc['parentElement']['classList']['remove']('input-style-active');
                        _0x77b9xc['parentElement']['querySelector']('em')['classList']['remove']('disabled')
                    }
                })
            });
            var _0x77b9x1a = document['querySelectorAll']('.input-style textarea');
            _0x77b9x1a['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('keyup', (_0x77b9xb) => {
                    if (!_0x77b9xc['value'] == '') {
                        _0x77b9xc['parentElement']['classList']['add']('input-style-active');
                        _0x77b9xc['parentElement']['querySelector']('em')['classList']['add']('disabled')
                    } else {
                        _0x77b9xc['parentElement']['classList']['remove']('input-style-active');
                        _0x77b9xc['parentElement']['querySelector']('em')['classList']['remove']('disabled')
                    }
                })
            });
            var _0x77b9x1b = document['querySelectorAll']('.input-style select');
            _0x77b9x1b['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('change', (_0x77b9xb) => {
                    if (_0x77b9xc['value'] !== 'default') {
                        _0x77b9xc['parentElement']['classList']['add']('input-style-active');
                        _0x77b9xc['parentElement']['querySelectorAll']('.valid')[0]['classList']['remove']('disabled');
                        _0x77b9xc['parentElement']['querySelectorAll']('.invalid, em, span')[0]['classList']['add']('disabled')
                    };
                    if (_0x77b9xc['value'] == 'default') {
                        _0x77b9xc['parentElement']['querySelectorAll']('span, .valid, em')[0]['classList']['add']('disabled');
                        _0x77b9xc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['remove']('disabled');
                        _0x77b9xc['parentElement']['classList']['add']('input-style-active')
                    }
                })
            });
            var _0x77b9x1c = document['querySelectorAll']('.input-style input[type=\"date\"]');
            _0x77b9x1c['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('change', (_0x77b9xb) => {
                    _0x77b9xc['parentElement']['classList']['add']('input-style-active');
                    _0x77b9xc['parentElement']['querySelectorAll']('.valid')[0]['classList']['remove']('disabled');
                    _0x77b9xc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['add']('disabled')
                })
            });
            var _0x77b9x1d = document['querySelectorAll']('.validate-field input, .validator-field textarea');
            if (_0x77b9x1d['length']) {
                _0x77b9x1d['forEach']((_0x77b9xc) => {
                    return _0x77b9xc['addEventListener']('keyup', (_0x77b9xb) => {
                        var _0x77b9x1e = _0x77b9xc['getAttribute']('type');
                        switch (_0x77b9x1e) {
                            case 'name':
                                _0x77b9x11['test'](_0x77b9xc['value']) ? _0x77b9x16(_0x77b9xc) : _0x77b9x17(_0x77b9xc);
                                break;
                            case 'number':
                                _0x77b9x13['test'](_0x77b9xc['value']) ? _0x77b9x16(_0x77b9xc) : _0x77b9x17(_0x77b9xc);
                                break;
                            case 'email':
                                _0x77b9xf['test'](_0x77b9xc['value']) ? _0x77b9x16(_0x77b9xc) : _0x77b9x17(_0x77b9xc);
                                break;
                            case 'text':
                                _0x77b9x15['test'](_0x77b9xc['value']) ? _0x77b9x16(_0x77b9xc) : _0x77b9x17(_0x77b9xc);
                                break;
                            case 'url':
                                _0x77b9x14['test'](_0x77b9xc['value']) ? _0x77b9x16(_0x77b9xc) : _0x77b9x17(_0x77b9xc);
                                break;
                            case 'tel':
                                _0x77b9x10['test'](_0x77b9xc['value']) ? _0x77b9x16(_0x77b9xc) : _0x77b9x17(_0x77b9xc);
                                break;
                            case 'password':
                                _0x77b9x12['test'](_0x77b9xc['value']) ? _0x77b9x16(_0x77b9xc) : _0x77b9x17(_0x77b9xc);
                                break
                        };
                        if (_0x77b9xc['value'] === '') {
                            _0x77b9x18(_0x77b9xc)
                        }
                    })
                })
            }
        };
        var _0x77b9x31 = document['querySelectorAll']('.menu');

        function _0x77b9x32() {
            if (_0x77b9x31['length']) {
                var _0x77b9x33 = document['querySelectorAll']('.menu-box-left, .menu-box-right');
                _0x77b9x33['forEach'](function (_0x77b9xb) {
                    if (_0x77b9xb['getAttribute']('data-menu-width') === 'cover') {
                        _0x77b9xb['style']['width'] = '100%'
                    } else {
                        _0x77b9xb['style']['width'] = (_0x77b9xb['getAttribute']('data-menu-width')) + 'px'
                    }
                });
                var _0x77b9x34 = document['querySelectorAll']('.menu-box-bottom, .menu-box-top, .menu-box-modal');
                _0x77b9x34['forEach'](function (_0x77b9xb) {
                    if (_0x77b9xb['getAttribute']('data-menu-width') === 'cover') {
                        _0x77b9xb['style']['width'] = '100%';
                        _0x77b9xb['style']['height'] = '100%'
                    } else {
                        _0x77b9xb['style']['width'] = (_0x77b9xb['getAttribute']('data-menu-width')) + 'px';
                        _0x77b9xb['style']['height'] = (_0x77b9xb['getAttribute']('data-menu-height')) + 'px'
                    }
                });
                var _0x77b9x35 = document['querySelectorAll']('[data-menu]');
                var _0x77b9x36 = document['querySelectorAll']('.header, #footer-bar, .page-content');
                _0x77b9x35['forEach']((_0x77b9xc) => {
                    return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                        const _0x77b9x37 = document['querySelectorAll']('.menu-active');
                        for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x37['length']; _0x77b9xa++) {
                            _0x77b9x37[_0x77b9xa]['classList']['remove']('menu-active')
                        };
                        var _0x77b9x38 = _0x77b9xc['getAttribute']('data-menu');
                        document['getElementById'](_0x77b9x38)['classList']['add']('menu-active');
                        document['getElementsByClassName']('menu-hider')[0]['classList']['add']('menu-active');
                        var _0x77b9x39 = document['getElementById'](_0x77b9x38);
                        var _0x77b9x3a = _0x77b9x39['getAttribute']('data-menu-effect');
                        var _0x77b9x3b = _0x77b9x39['classList']['contains']('menu-box-left');
                        var _0x77b9x3c = _0x77b9x39['classList']['contains']('menu-box-right');
                        var _0x77b9x3d = _0x77b9x39['classList']['contains']('menu-box-top');
                        var _0x77b9x3e = _0x77b9x39['classList']['contains']('menu-box-bottom');
                        var _0x77b9x3f = _0x77b9x39['offsetWidth'];
                        var _0x77b9x40 = _0x77b9x39['offsetHeight'];
                        var _0x77b9x41 = _0x77b9x39['getAttribute']('data-menu-hide');
                        if (_0x77b9x41) {
                            setTimeout(function () {
                                document['getElementById'](_0x77b9x38)['classList']['remove']('menu-active');
                                document['getElementsByClassName']('menu-hider')[0]['classList']['remove']('menu-active')
                            }, _0x77b9x41)
                        };
                        if (_0x77b9x3a === 'menu-push') {
                            var _0x77b9x3f = document['getElementById'](_0x77b9x38)['getAttribute']('data-menu-width');
                            if (_0x77b9x3b) {
                                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x36['length']; _0x77b9xa++) {
                                    _0x77b9x36[_0x77b9xa]['style']['transform'] = 'translateX(' + _0x77b9x3f + 'px)'
                                }
                            };
                            if (_0x77b9x3c) {
                                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x36['length']; _0x77b9xa++) {
                                    _0x77b9x36[_0x77b9xa]['style']['transform'] = 'translateX(-' + _0x77b9x3f + 'px)'
                                }
                            };
                            if (_0x77b9x3e) {
                                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x36['length']; _0x77b9xa++) {
                                    _0x77b9x36[_0x77b9xa]['style']['transform'] = 'translateY(-' + _0x77b9x40 + 'px)'
                                }
                            };
                            if (_0x77b9x3d) {
                                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x36['length']; _0x77b9xa++) {
                                    _0x77b9x36[_0x77b9xa]['style']['transform'] = 'translateY(' + _0x77b9x40 + 'px)'
                                }
                            }
                        };
                        if (_0x77b9x3a === 'menu-parallax') {
                            var _0x77b9x3f = document['getElementById'](_0x77b9x38)['getAttribute']('data-menu-width');
                            if (_0x77b9x3b) {
                                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x36['length']; _0x77b9xa++) {
                                    _0x77b9x36[_0x77b9xa]['style']['transform'] = 'translateX(' + _0x77b9x3f / 10 + 'px)'
                                }
                            };
                            if (_0x77b9x3c) {
                                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x36['length']; _0x77b9xa++) {
                                    _0x77b9x36[_0x77b9xa]['style']['transform'] = 'translateX(-' + _0x77b9x3f / 10 + 'px)'
                                }
                            };
                            if (_0x77b9x3e) {
                                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x36['length']; _0x77b9xa++) {
                                    _0x77b9x36[_0x77b9xa]['style']['transform'] = 'translateY(-' + _0x77b9x40 / 5 + 'px)'
                                }
                            };
                            if (_0x77b9x3d) {
                                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x36['length']; _0x77b9xa++) {
                                    _0x77b9x36[_0x77b9xa]['style']['transform'] = 'translateY(' + _0x77b9x40 / 5 + 'px)'
                                }
                            }
                        }
                    })
                });
                const _0x77b9x42 = document['querySelectorAll']('.close-menu, .menu-hider');
                _0x77b9x42['forEach']((_0x77b9xc) => {
                    return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                        const _0x77b9x37 = document['querySelectorAll']('.menu-active');
                        for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x37['length']; _0x77b9xa++) {
                            _0x77b9x37[_0x77b9xa]['classList']['remove']('menu-active')
                        };
                        for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x36['length']; _0x77b9xa++) {
                            _0x77b9x36[_0x77b9xa]['style']['transform'] = 'translateX(-' + 0 + 'px)'
                        }
                    })
                })
            }
        }
        _0x77b9x32();

        function _0x77b9x43() {
            const _0x77b9x44 = document['querySelectorAll']('[data-menu-active]')[0];
            if (_0x77b9x44) {
                var _0x77b9x45 = _0x77b9x44['getAttribute']('data-menu-active');
                document['querySelectorAll']('#' + _0x77b9x45)[0]['classList']['add']('active-nav')
            }
        }
        const _0x77b9x46 = document['querySelectorAll']('[data-back-button]');
        if (_0x77b9x46['length']) {
            _0x77b9x46['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                    _0x77b9xb['stopPropagation'];
                    _0x77b9xb['preventDefault'];
                    window['history']['go'](-1)
                })
            })
        };

        function _0x77b9x47() {
            const _0x77b9x48 = document['querySelectorAll']('.back-to-top-icon, .back-to-top-badge, .back-to-top');
            if (_0x77b9x48) {
                _0x77b9x48['forEach']((_0x77b9xc) => {
                    return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                        window['scrollTo']({
                            top: 0,
                            behavior: `${'smooth'}`
                        })
                    })
                })
            }
        }

        function _0x77b9x49() {
            let _0x77b9x4a, _0x77b9x4b;
            if (/iP(hone|od|ad)/['test'](navigator['platform'])) {
                _0x77b9x4b = (navigator['appVersion'])['match'](/OS (\d+)_(\d+)_?(\d+)?/);
                _0x77b9x4a = {
                    status: true,
                    version: parseInt(_0x77b9x4b[1], 10),
                    info: parseInt(_0x77b9x4b[1], 10) + '.' + parseInt(_0x77b9x4b[2], 10) + '.' + parseInt(_0x77b9x4b[3] || 0, 10)
                }
            } else {
                _0x77b9x4a = {
                    status: false,
                    version: false,
                    info: ''
                }
            };
            return _0x77b9x4a
        }
        let _0x77b9x4c = _0x77b9x49();
        if (_0x77b9x4c['version'] > 14) {
            document['querySelectorAll']('#page')[0]['classList']['add']('min-ios15')
        };
        const _0x77b9x4d = document['getElementsByClassName']('card');

        function _0x77b9x4e() {
            var _0x77b9x4f, _0x77b9x50, _0x77b9x51;
            var _0x77b9x51 = document['querySelectorAll']('.header:not(.header-transparent)')[0];
            var _0x77b9x52 = document['querySelectorAll']('#footer-bar')[0];
            _0x77b9x51 ? _0x77b9x4f = document['querySelectorAll']('.header')[0]['offsetHeight'] : _0x77b9x4f = 0;
            _0x77b9x52 ? _0x77b9x50 = document['querySelectorAll']('#footer-bar')[0]['offsetHeight'] : _0x77b9x50 = 0;
            for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x4d['length']; _0x77b9xa++) {
                if (_0x77b9x4d[_0x77b9xa]['getAttribute']('data-card-height') === 'cover') {
                    if (window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x77b9x53 = window['outerHeight']
                    };
                    if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x77b9x53 = window['innerHeight']
                    };
                    var _0x77b9x54 = _0x77b9x53 + 'px'
                };
                if (_0x77b9x4d[_0x77b9xa]['getAttribute']('data-card-height') === 'cover-card') {
                    var _0x77b9x53 = window['outerHeight'];
                    var _0x77b9x54 = _0x77b9x53 - 300 + 'px';
                    _0x77b9x4d[_0x77b9xa]['style']['height'] = _0x77b9x54
                };
                if (_0x77b9x4d[_0x77b9xa]['getAttribute']('data-card-height') === 'cover-full') {
                    if (window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x77b9x53 = window['outerHeight']
                    };
                    if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x77b9x53 = window['innerHeight']
                    };
                    var _0x77b9x54 = _0x77b9x53 + 'px';
                    _0x77b9x4d[_0x77b9xa]['style']['height'] = _0x77b9x54
                };
                if (_0x77b9x4d[_0x77b9xa]['hasAttribute']('data-card-height')) {
                    var _0x77b9x55 = _0x77b9x4d[_0x77b9xa]['getAttribute']('data-card-height');
                    _0x77b9x4d[_0x77b9xa]['style']['height'] = _0x77b9x55 + 'px';
                    if (_0x77b9x55 === 'cover') {
                        var _0x77b9x56 = _0x77b9x55;
                        _0x77b9x4d[_0x77b9xa]['style']['height'] = _0x77b9x54
                    }
                }
            }
        }
        if (_0x77b9x4d['length']) {
            _0x77b9x4e();
            window['addEventListener']('resize', _0x77b9x4e)
        };

        function _0x77b9x57() {
            var _0x77b9x58 = localStorage['getItem'](_0x77b9x4 + '-Highlight');
            if (_0x77b9x58) {
                document['querySelectorAll']('[data-change-highlight=\"' + _0x77b9x58 + '\"]')[0]['classList']['add']('highlight-active');
                document['body']['setAttribute']('data-highlight', _0x77b9x58)
            }
        }

        function _0x77b9x59() {
            var _0x77b9x5a = document['querySelectorAll']('[data-change-highlight]');
            _0x77b9x5a['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                    const _0x77b9x5b = document['querySelectorAll']('.highlight-active');
                    for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x5b['length']; _0x77b9xa++) {
                        _0x77b9x5b[_0x77b9xa]['classList']['remove']('highlight-active')
                    };
                    _0x77b9xc['classList']['add']('highlight-active');
                    var _0x77b9x5c = _0x77b9xc['getAttribute']('data-change-highlight');
                    var _0x77b9x5d = document['querySelectorAll']('.page-highlight');
                    if (_0x77b9x5d['length']) {
                        _0x77b9x5d['forEach'](function (_0x77b9xb) {
                            _0x77b9xb['remove']()
                        })
                    };
                    var _0x77b9x5e = document['createElement']('link');
                    _0x77b9x5e['rel'] = 'stylesheet';
                    _0x77b9x5e['className'] = 'page-highlight';
                    _0x77b9x5e['type'] = 'text/css';
                    _0x77b9x5e['href'] = 'styles/highlights/highlight_' + _0x77b9x5c + '.css';
                    document['getElementsByTagName']('head')[0]['appendChild'](_0x77b9x5e);
                    document['body']['setAttribute']('data-highlight', 'highlight-' + _0x77b9x5c);
                    localStorage['setItem'](_0x77b9x4 + '-Highlight', _0x77b9x5c)
                })
            });
            var _0x77b9x58 = localStorage['getItem'](_0x77b9x4 + '-Highlight');
            if (_0x77b9x58) {
                var _0x77b9x5e = document['createElement']('link');
                _0x77b9x5e['rel'] = 'stylesheet';
                _0x77b9x5e['className'] = 'page-highlight';
                _0x77b9x5e['type'] = 'text/css';
                _0x77b9x5e['href'] = 'styles/highlights/highlight_' + _0x77b9x58 + '.css';
                if (!document['querySelectorAll']('.page-highlight')['length']) {
                    document['getElementsByTagName']('head')[0]['appendChild'](_0x77b9x5e);
                    document['body']['setAttribute']('data-highlight', 'highlight-' + _0x77b9x58)
                }
            }
        }
        _0x77b9x59();
        var _0x77b9x5f = document['querySelectorAll']('[data-change-background]');
        _0x77b9x5f['forEach']((_0x77b9xc) => {
            return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                var _0x77b9x60 = _0x77b9xc['getAttribute']('data-change-background');
                document['body']['setAttribute']('data-gradient', 'body-' + _0x77b9x60 + '');
                localStorage['setItem'](_0x77b9x4 + '-Gradient', _0x77b9x60)
            })
        });
        var _0x77b9x61 = localStorage['getItem'](_0x77b9x4 + '-Gradient');
        if (_0x77b9x61) {
            document['body']['setAttribute']('data-gradient', 'body-' + _0x77b9x61 + '')
        };

        function _0x77b9x62() {
            const _0x77b9x63 = document['querySelectorAll']('[data-toggle-theme]');

            function _0x77b9x64() {
                document['body']['classList']['add']('theme-dark');
                document['body']['classList']['remove']('theme-light', 'detect-theme');
                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x63['length']; _0x77b9xa++) {
                    _0x77b9x63[_0x77b9xa]['checked'] = 'checked'
                };
                localStorage['setItem'](_0x77b9x4 + '-Theme', 'dark-mode')
            }

            function _0x77b9x65() {
                document['body']['classList']['add']('theme-light');
                document['body']['classList']['remove']('theme-dark', 'detect-theme');
                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x63['length']; _0x77b9xa++) {
                    _0x77b9x63[_0x77b9xa]['checked'] = false
                };
                localStorage['setItem'](_0x77b9x4 + '-Theme', 'light-mode')
            }

            function _0x77b9x66() {
                var _0x77b9x67 = document['querySelectorAll']('.btn, .header, #footer-bar, .menu-box, .menu-active');
                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x67['length']; _0x77b9xa++) {
                    _0x77b9x67[_0x77b9xa]['style']['transition'] = 'all 0s ease'
                }
            }

            function _0x77b9x68() {
                var _0x77b9x69 = document['querySelectorAll']('.btn, .header, #footer-bar, .menu-box, .menu-active');
                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x69['length']; _0x77b9xa++) {
                    _0x77b9x69[_0x77b9xa]['style']['transition'] = ''
                }
            }

            function _0x77b9x6a() {
                const _0x77b9x6b = window['matchMedia']('(prefers-color-scheme: dark)')['matches'];
                const _0x77b9x6c = window['matchMedia']('(prefers-color-scheme: light)')['matches'];
                const _0x77b9x6d = window['matchMedia']('(prefers-color-scheme: no-preference)')['matches'];
                window['matchMedia']('(prefers-color-scheme: dark)')['addListener']((_0x77b9xb) => {
                    return _0x77b9xb['matches'] && _0x77b9x64()
                });
                window['matchMedia']('(prefers-color-scheme: light)')['addListener']((_0x77b9xb) => {
                    return _0x77b9xb['matches'] && _0x77b9x65()
                });
                if (_0x77b9x6b) {
                    _0x77b9x64()
                };
                if (_0x77b9x6c) {
                    _0x77b9x65()
                }
            }
            var _0x77b9x6e = document['querySelectorAll']('[data-toggle-theme]');
            _0x77b9x6e['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                    if (document['body']['className'] == 'theme-light') {
                        _0x77b9x66();
                        _0x77b9x64()
                    } else {
                        if (document['body']['className'] == 'theme-dark') {
                            _0x77b9x66();
                            _0x77b9x65()
                        }
                    };
                    setTimeout(function () {
                        _0x77b9x68()
                    }, 350)
                })
            });
            if (localStorage['getItem'](_0x77b9x4 + '-Theme') == 'dark-mode') {
                for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x63['length']; _0x77b9xa++) {
                    _0x77b9x63[_0x77b9xa]['checked'] = 'checked'
                };
                document['body']['className'] = 'theme-dark'
            };
            if (localStorage['getItem'](_0x77b9x4 + '-Theme') == 'light-mode') {
                document['body']['className'] = 'theme-light'
            };
            if (document['body']['className'] == 'detect-theme') {
                _0x77b9x6a()
            };
            const _0x77b9x6f = document['querySelectorAll']('.detect-dark-mode');
            _0x77b9x6f['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                    document['body']['classList']['remove']('theme-light', 'theme-dark');
                    document['body']['classList']['add']('detect-theme');
                    setTimeout(function () {
                        _0x77b9x6a()
                    }, 50)
                })
            })
        }
        if (localStorage['getItem'](_0x77b9x4 + '-Theme') == 'dark-mode') {
            document['body']['className'] = 'theme-dark'
        };
        if (localStorage['getItem'](_0x77b9x4 + '-Theme') == 'light-mode') {
            document['body']['className'] = 'theme-light'
        };
        const _0x77b9x70 = document['querySelectorAll']('.accordion-btn');
        if (_0x77b9x70['length']) {
            _0x77b9x70['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9x71) => {
                    _0x77b9xc['querySelector']('i:last-child')['classList']['toggle']('fa-rotate-180')
                })
            })
        };
        // const _0x77b9x72 = document['getElementsByClassName']('upload-file');
        // if (_0x77b9x72['length']) {
        //     _0x77b9x72[0]['addEventListener']('change', _0x77b9x73, false);

        //     function _0x77b9x73(_0x77b9x71) {
        //         if (this['files'] && this['files'][0]) {
        //             var _0x77b9x74 = document['getElementById']('image-data');
        //             _0x77b9x74['src'] = URL['createObjectURL'](this['files'][0])
        //         };
        //         const _0x77b9x75 = _0x77b9x71['target']['files'];
        //         const _0x77b9x76 = _0x77b9x75[0]['name'];
        //         document['getElementsByClassName']('file-data')[0]['classList']['add']('disabled');
        //         document['getElementsByClassName']('upload-file-data')[0]['classList']['remove']('disabled');
        //         document['getElementsByClassName']('upload-file-name')[0]['innerHTML'] = _0x77b9x75[0]['name'];
        //         document['getElementsByClassName']('upload-file-modified')[0]['innerHTML'] = _0x77b9x75[0]['lastModifiedDate'];
        //         document['getElementsByClassName']('upload-file-size')[0]['innerHTML'] = _0x77b9x75[0]['size'] / 1000 + 'kb';
        //         document['getElementsByClassName']('upload-file-type')[0]['innerHTML'] = _0x77b9x75[0]['type']
        //     }
        // };
        // var _0x77b9x77 = document['querySelectorAll']('.get-location');
        // if (_0x77b9x77['length']) {
        //     var _0x77b9x78 = document['getElementsByClassName']('location-support')[0];
        //     if (typeof (_0x77b9x78) != 'undefined' && _0x77b9x78 != null) {
        //         if ('geolocation' in navigator) {
        //             _0x77b9x78['innerHTML'] = 'Your browser and device <strong class=\"color-green2-dark\">support</strong> Geolocation.'
        //         } else {
        //             _0x77b9x78['innerHTML'] = 'Your browser and device <strong class=\"color-red2-dark\">support</strong> Geolocation.'
        //         }
        //     };

        //     function _0x77b9x79() {
        //         const _0x77b9x7a = document['querySelector']('.location-coordinates');

        //         function _0x77b9x7b(_0x77b9x7c) {
        //             const _0x77b9x7d = _0x77b9x7c['coords']['latitude'];
        //             const _0x77b9x7e = _0x77b9x7c['coords']['longitude'];
        //             _0x77b9x7a['innerHTML'] = '<strong>Longitude:</strong> ' + _0x77b9x7e + '<br><strong>Latitude:</strong> ' + _0x77b9x7d;
        //             var _0x77b9x7f = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyAM3nxDVrkjyKwdIZp8QOplmBKLRVI5S_Y&center=';
        //             var _0x77b9x80 = _0x77b9x7d + ',';
        //             var _0x77b9x81 = _0x77b9x7e;
        //             var _0x77b9x82 = '&zoom=16&maptype=satellite';
        //             var _0x77b9x83 = '';
        //             var _0x77b9x84 = _0x77b9x7f + _0x77b9x80 + _0x77b9x81 + _0x77b9x82;
        //             var _0x77b9x85 = _0x77b9x7f + _0x77b9x80 + _0x77b9x81 + _0x77b9x83;
        //             document['getElementsByClassName']('location-map')[0]['setAttribute']('src', _0x77b9x84);
        //             document['getElementsByClassName']('location-button')[0]['setAttribute']('href', _0x77b9x85);
        //             document['getElementsByClassName']('location-button')[0]['classList']['remove']('disabled')
        //         }

        //         function _0x77b9x86() {
        //             _0x77b9x7a['textContent'] = 'Unable to retrieve your location'
        //         }
        //         if (!navigator['geolocation']) {
        //             _0x77b9x7a['textContent'] = 'Geolocation is not supported by your browser'
        //         } else {
        //             _0x77b9x7a['textContent'] = 'Locating';
        //             navigator['geolocation']['getCurrentPosition'](_0x77b9x7b, _0x77b9x86)
        //         }
        //     }
        //     var _0x77b9x87 = document['getElementsByClassName']('get-location')[0];
        //     if (typeof (_0x77b9x87) != 'undefined' && _0x77b9x87 != null) {
        //         _0x77b9x87['addEventListener']('click', function () {
        //             this['classList']['add']('disabled');
        //             _0x77b9x79()
        //         })
        //     }
        // };
        const _0x77b9x88 = document['querySelectorAll']('.card-scale');
        if (_0x77b9x88['length']) {
            _0x77b9x88['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('mouseenter', (_0x77b9x71) => {
                    _0x77b9xc['querySelectorAll']('img')[0]['classList']['add']('card-scale-image')
                })
            });
            _0x77b9x88['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('mouseleave', (_0x77b9x71) => {
                    _0x77b9xc['querySelectorAll']('img')[0]['classList']['remove']('card-scale-image')
                })
            })
        };
        const _0x77b9x89 = document['querySelectorAll']('.card-hide');
        if (_0x77b9x89['length']) {
            _0x77b9x89['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('mouseenter', (_0x77b9x71) => {
                    _0x77b9xc['querySelectorAll']('.card-center, .card-bottom, .card-top, .card-overlay')[0]['classList']['add']('card-hide-image')
                })
            });
            _0x77b9x89['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('mouseleave', (_0x77b9x71) => {
                    _0x77b9xc['querySelectorAll']('.card-center, .card-bottom, .card-top, .card-overlay')[0]['classList']['remove']('card-hide-image')
                })
            })
        };
        const _0x77b9x8a = document['querySelectorAll']('.card-rotate');
        if (_0x77b9x8a['length']) {
            _0x77b9x8a['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('mouseenter', (_0x77b9x71) => {
                    _0x77b9xc['querySelectorAll']('img')[0]['classList']['add']('card-rotate-image')
                })
            });
            _0x77b9x8a['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('mouseleave', (_0x77b9x71) => {
                    _0x77b9xc['querySelectorAll']('img')[0]['classList']['remove']('card-rotate-image')
                })
            })
        };
        const _0x77b9x8b = document['querySelectorAll']('.card-grayscale');
        if (_0x77b9x8b['length']) {
            _0x77b9x8b['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('mouseenter', (_0x77b9x71) => {
                    _0x77b9xc['querySelectorAll']('img')[0]['classList']['add']('card-grayscale-image')
                })
            });
            _0x77b9x8b['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('mouseleave', (_0x77b9x71) => {
                    _0x77b9xc['querySelectorAll']('img')[0]['classList']['remove']('card-grayscale-image')
                })
            })
        };
        const _0x77b9x8c = document['querySelectorAll']('.card-blur');
        if (_0x77b9x8c['length']) {
            _0x77b9x8c['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('mouseenter', (_0x77b9x71) => {
                    _0x77b9xc['querySelectorAll']('img')[0]['classList']['add']('card-blur-image')
                })
            });
            _0x77b9x8c['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('mouseleave', (_0x77b9x71) => {
                    _0x77b9xc['querySelectorAll']('img')[0]['classList']['remove']('card-blur-image')
                })
            })
        };
        // var _0x77b9x8d = document['querySelectorAll']('.check-visited');
        // if (_0x77b9x8d['length']) {
        //     function _0x77b9x8e() {
        //         var _0x77b9x8f = JSON['parse'](localStorage['getItem'](_0x77b9x4 + '_Visited_Links')) || [];
        //         var _0x77b9x90 = document['querySelectorAll']('.check-visited a');
        //         for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x90['length']; _0x77b9xa++) {
        //             var _0x77b9x91 = _0x77b9x90[_0x77b9xa];
        //             _0x77b9x91['addEventListener']('click', function (_0x77b9xb) {
        //                 var _0x77b9x92 = this['href'];
        //                 if (_0x77b9x8f['indexOf'](_0x77b9x92) == -1) {
        //                     _0x77b9x8f['push'](_0x77b9x92);
        //                     localStorage['setItem'](_0x77b9x4 + '_Visited_Links', JSON['stringify'](_0x77b9x8f))
        //                 }
        //             });
        //             if (_0x77b9x8f['indexOf'](_0x77b9x91['href']) !== -1) {
        //                 _0x77b9x91['className'] += ' visited-link'
        //             }
        //         }
        //     }
        //     _0x77b9x8e()
        // };
        var _0x77b9x93 = document['querySelectorAll']('.footer-bar-6')[0];
        if (_0x77b9x93) {
            var _0x77b9x94 = document['querySelectorAll']('.footer-bar-6 .active-nav')[0];
            var _0x77b9x95 = document['querySelectorAll']('.footer-bar-6 .circle-nav')[0];
            _0x77b9x94['insertAdjacentHTML']('beforeend', '<em></em>');
            _0x77b9x95['insertAdjacentHTML']('beforeend', '<strong><u></u></strong>')
        };
        var _0x77b9x96 = document['getElementById']('adblock-message');
        if (_0x77b9x96) {
            var _0x77b9x97 = false;
            document['body']['innerHTML'] += '<div class=\"adsbygoogle\" id=\"ad-detector\"></div>';
            var _0x77b9x98 = document['getElementById']('ad-detector');
            var _0x77b9x99 = getComputedStyle(_0x77b9x98, null);
            if (_0x77b9x99['display'] === 'none') {
                document['getElementById']('adblock-message')['classList']['remove']('disabled')
            }
        };
        let _0x77b9x9a = document['querySelectorAll']('.fixed-ad')[0];
        let _0x77b9x9b = document['querySelectorAll']('.scroll-ad')[0];
        if (_0x77b9x9a || _0x77b9x9b) {
            var _0x77b9x9c = document['getElementById']('activate-scroll-ad');
            _0x77b9x9c['addEventListener']('click', function () {
                _0x77b9x9b['classList']['add']('scroll-ad-visible');
                _0x77b9x9b['classList']['remove']('disabled');
                _0x77b9x9a['classList']['add']('disabled')
            });
            var _0x77b9x9d = document['getElementById']('activate-fixed-ad');
            _0x77b9x9d['addEventListener']('click', function () {
                _0x77b9x9b['classList']['add']('disabled');
                _0x77b9x9a['classList']['remove']('disabled')
            })
        };
        var _0x77b9x9e = document['querySelectorAll']('.scroll-ad, .header-auto-show');
        if (_0x77b9x9e['length']) {
            var _0x77b9x9f = document['querySelectorAll']('.scroll-ad');
            var _0x77b9xa0 = document['querySelectorAll']('.header-auto-show');
            var _0x77b9xa1 = document['querySelectorAll']('.page-title');
            window['addEventListener']('scroll', function () {
                if (document['querySelectorAll']('.scroll-ad, .header-auto-show')['length']) {
                    function _0x77b9xa2() {
                        _0x77b9x9f[0]['classList']['add']('scroll-ad-visible')
                    }

                    function _0x77b9xa3() {
                        _0x77b9x9f[0]['classList']['remove']('scroll-ad-visible')
                    }

                    function _0x77b9xa4() {
                        _0x77b9xa0[0]['classList']['add']('header-active')
                    }

                    function _0x77b9xa5() {
                        _0x77b9xa0[0]['classList']['remove']('header-active')
                    }

                    function _0x77b9xa6() {
                        _0x77b9xa1[0]['style']['opacity'] = '0'
                    }

                    function _0x77b9xa7() {
                        _0x77b9xa1[0]['style']['opacity'] = '1'
                    }
                    var _0x77b9xa8 = window['outerWidth'];
                    var _0x77b9xa9 = document['documentElement']['scrollTop'];
                    let _0x77b9xaa = _0x77b9xa9 <= 80;
                    var _0x77b9xab = _0x77b9xa9 >= 80;
                    let _0x77b9xac = _0x77b9xa9 <= 40;
                    var _0x77b9xad = _0x77b9xa9 >= 40;
                    let _0x77b9xae = (_0x77b9xa8 - _0x77b9xa9 + 1000) <= 150;
                    if (_0x77b9x9f['length']) {
                        _0x77b9xaa ? _0x77b9xa3() : null;
                        _0x77b9xab ? _0x77b9xa2() : null;
                        _0x77b9xae ? _0x77b9xa3() : null
                    };
                    if (_0x77b9xa0['length']) {
                        _0x77b9xaa ? _0x77b9xa5() : null;
                        _0x77b9xab ? _0x77b9xa4() : null
                    };
                    if (_0x77b9xa1['length']) {
                        _0x77b9xac ? _0x77b9xa7() : null;
                        _0x77b9xad ? _0x77b9xa6() : null
                    }
                }
            })
        };
        var _0x77b9xaf = document['querySelectorAll']('.stepper-add');
        var _0x77b9xb0 = document['querySelectorAll']('.stepper-sub');
        if (_0x77b9xaf['length']) {
            _0x77b9xaf['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9x71) => {
                    var _0x77b9xb1 = _0x77b9xc['parentElement']['querySelector']('input')['value'];
                    _0x77b9xc['parentElement']['querySelector']('input')['value'] = +_0x77b9xb1 + 1
                })
            });
            _0x77b9xb0['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9x71) => {
                    var _0x77b9xb1 = _0x77b9xc['parentElement']['querySelector']('input')['value'];
                    _0x77b9xc['parentElement']['querySelector']('input')['value'] = +_0x77b9xb1 - 1
                })
            })
        };
        var _0x77b9xb2 = document['querySelectorAll']('[data-trigger-switch]:not([data-toggle-theme])');
        if (_0x77b9xb2['length']) {
            _0x77b9xb2['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9x71) => {
                    var _0x77b9xb3 = _0x77b9xc['getAttribute']('data-trigger-switch');
                    var _0x77b9xb4 = document['getElementById'](_0x77b9xb3);
                    _0x77b9xb4['checked'] ? _0x77b9xb4['checked'] = false : _0x77b9xb4['checked'] = true
                })
            })
        };
        var _0x77b9xb5 = document['querySelectorAll']('.classic-toggle');
        if (_0x77b9xb5['length']) {
            _0x77b9xb5['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9x71) => {
                    _0x77b9xc['querySelector']('i:last-child')['classList']['toggle']('fa-rotate-180');
                    _0x77b9xc['querySelector']('i:last-child')['style']['transition'] = 'all 250ms ease'
                })
            })
        };
        var _0x77b9xb6 = document['querySelectorAll']('[data-toast]');
        if (_0x77b9xb6['length']) {
            _0x77b9xb6['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9x71) => {
                    var _0x77b9xb7 = _0x77b9xc['getAttribute']('data-toast');
                    var _0x77b9xb8 = document['getElementById'](_0x77b9xb7);
                    var _0x77b9xb8 = new bootstrap.Toast(_0x77b9xb8);
                    _0x77b9xb8['show']()
                })
            })
        };
        var _0x77b9xb9 = []['slice']['call'](document['querySelectorAll']('[data-bs-toggle=\"dropdown\"]'));
        if (_0x77b9xb9['length']) {
            var _0x77b9xba = _0x77b9xb9['map'](function (_0x77b9xbb) {
                return new bootstrap.Dropdown(_0x77b9xbb)
            })
        };
        // var _0x77b9xbc = document['querySelectorAll']('.show-business-opened, .show-business-closed, .working-hours');
        // if (_0x77b9xbc['length']) {
        //     var _0x77b9x4a = new Date();
        //     var _0x77b9xbd = _0x77b9x4a['getDay']();
        //     var _0x77b9xbe = _0x77b9x4a['getHours']() + '.' + _0x77b9x4a['getMinutes']();
        //     var _0x77b9xbf = [
        //         ['Sunday'],
        //         ['Monday', 9.00, 17.00],
        //         ['Tuesday', 9.00, 17.00],
        //         ['Wednesday', 9.00, 17.00],
        //         ['Thursday', 9.00, 17.00],
        //         ['Friday', 9.00, 17.00],
        //         ['Saturday', 9.00, 13.00]
        //     ];
        //     var _0x77b9xc0 = _0x77b9xbf[_0x77b9xbd];
        //     var _0x77b9xc1 = document['querySelectorAll']('.show-business-opened');
        //     var _0x77b9xc2 = document['querySelectorAll']('.show-business-closed');
        //     if (_0x77b9xbe > _0x77b9xc0[1] && _0x77b9xbe < _0x77b9xc0[2] || _0x77b9xbe > _0x77b9xc0[3] && _0x77b9xbe < _0x77b9xc0[4]) {
        //         _0x77b9xc1['forEach'](function (_0x77b9xb) {
        //             _0x77b9xb['classList']['remove']('disabled')
        //         });
        //         _0x77b9xc2['forEach'](function (_0x77b9xb) {
        //             _0x77b9xb['classList']['add']('disabled')
        //         })
        //     } else {
        //         _0x77b9xc1['forEach'](function (_0x77b9xb) {
        //             _0x77b9xb['classList']['add']('disabled')
        //         });
        //         _0x77b9xc2['forEach'](function (_0x77b9xb) {
        //             _0x77b9xb['classList']['remove']('disabled')
        //         })
        //     };
        //     var _0x77b9xbc = document['querySelectorAll']('.working-hours[data-day]');
        //     _0x77b9xbc['forEach'](function (_0x77b9xc3) {
        //         var _0x77b9xc4 = _0x77b9xc3['getAttribute']('data-day');
        //         if (_0x77b9xc4 === _0x77b9xc0[0]) {
        //             var _0x77b9xc5 = '[data-day=\"' + _0x77b9xc0[0] + '\"]';
        //             if (_0x77b9xbe > _0x77b9xc0[1] && _0x77b9xbe < _0x77b9xc0[2] || _0x77b9xbe > _0x77b9xc0[3] && _0x77b9xbe < _0x77b9xc0[4]) {
        //                 document['querySelectorAll'](_0x77b9xc5)[0]['classList']['add']('bg-green-dark');
        //                 document['querySelectorAll'](_0x77b9xc5 + ' p')['forEach'](function (_0x77b9xc6) {
        //                     _0x77b9xc6['classList']['add']('color-white')
        //                 })
        //             } else {
        //                 document['querySelectorAll'](_0x77b9xc5)[0]['classList']['add']('bg-red-dark');
        //                 document['querySelectorAll'](_0x77b9xc5 + ' p')['forEach'](function (_0x77b9xc6) {
        //                     _0x77b9xc6['classList']['add']('color-white')
        //                 })
        //             }
        //         }
        //     })
        // };
        var _0x77b9xc7 = document['querySelectorAll']('[data-vibrate]');
        if (_0x77b9xc7['length']) {
            var _0x77b9xc8 = document['getElementsByClassName']('start-vibrating')[0];
            var _0x77b9xc9 = document['getElementsByClassName']('stop-vibrating')[0];
            _0x77b9xc8['addEventListener']('click', function () {
                var _0x77b9xca = document['getElementsByClassName']('vibrate-demo')[0]['value'];
                window['navigator']['vibrate'](_0x77b9xca)
            });
            _0x77b9xc9['addEventListener']('click', function () {
                window['navigator']['vibrate'](0)
            });
            _0x77b9xc7['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                    var _0x77b9xca = _0x77b9xc['getAttribute']('data-vibrate');
                    window['navigator']['vibrate'](_0x77b9xca)
                })
            })
        };
        var _0x77b9xcb = document['querySelectorAll']('[data-timed-ad]');
        if (_0x77b9xcb['length']) {
            _0x77b9xcb['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                    var _0x77b9xcc = _0x77b9xc['getAttribute']('data-timed-ad');
                    var _0x77b9xcd = _0x77b9xc['getAttribute']('data-menu');
                    var _0x77b9xce = _0x77b9xcc;
                    var _0x77b9xcf = setInterval(function () {
                        if (_0x77b9xce <= 1) {
                            clearInterval(_0x77b9xcf);
                            document['getElementById'](_0x77b9xcd)['querySelectorAll']('.fa-times')[0]['classList']['remove']('disabled');
                            document['getElementById'](_0x77b9xcd)['querySelectorAll']('.close-menu')[0]['classList']['remove']('no-click');
                            document['getElementById'](_0x77b9xcd)['querySelectorAll']('span')[0]['style']['display'] = 'none'
                        } else { };
                        document['getElementById'](_0x77b9xcd)['querySelectorAll']('span')[0]['innerHTML'] = _0x77b9xce -= 1
                    }, 1000)
                })
            })
        };
        var _0x77b9xd0 = document['querySelectorAll']('[data-auto-show-ad]');
        if (_0x77b9xd0['length']) {
            var _0x77b9xd1 = _0x77b9xd0[0]['getAttribute']('data-auto-show-ad');
            var _0x77b9xcf = setInterval(function () {
                if (_0x77b9xd1 <= 1) {
                    clearInterval(_0x77b9xcf);
                    var _0x77b9xd2 = _0x77b9xd0[0]['getAttribute']('data-menu');
                    document['getElementById'](_0x77b9xd2)['classList']['add']('menu-active');
                    var _0x77b9xd3 = _0x77b9xd0[0]['getAttribute']('data-timed-ad');
                    var _0x77b9xd4 = setInterval(function () {
                        if (_0x77b9xd3 <= 0) {
                            clearInterval(_0x77b9xd4);
                            document['getElementById'](_0x77b9xd2)['querySelectorAll']('.fa-times')[0]['classList']['remove']('disabled');
                            document['getElementById'](_0x77b9xd2)['querySelectorAll']('.close-menu')[0]['classList']['remove']('no-click');
                            document['getElementById'](_0x77b9xd2)['querySelectorAll']('span')[0]['style']['display'] = 'none'
                        };
                        document['getElementById'](_0x77b9xd2)['querySelectorAll']('span')[0]['innerHTML'] = _0x77b9xd3 -= 1
                    }, 1000)
                };
                _0x77b9xd1 -= 1
            }, 1000)
        };
        var _0x77b9xd5 = document['querySelectorAll']('.visit-detection')[0];
        if (_0x77b9xd5) {
            var _0x77b9xd6 = document['querySelectorAll']('.never-visited')[0];
            var _0x77b9xd7 = document['querySelectorAll']('.before-visited')[0];
            var _0x77b9xd8 = document['querySelectorAll']('.visit-before-time')[0];
            var _0x77b9xd9 = localStorage['getItem'](_0x77b9x4 + '-Last-Visited');
            var _0x77b9x4a = new Date();
            var _0x77b9xda = _0x77b9x4a['getFullYear']() + '/' + (_0x77b9x4a['getMonth']() + 1) + '/' + _0x77b9x4a['getDate']();
            var _0x77b9xdb = _0x77b9x4a['getHours']() + ':' + _0x77b9x4a['getMinutes']() + ':' + _0x77b9x4a['getSeconds']();
            if (!_0x77b9xd9) {
                _0x77b9xd6['style']['display'] = 'block';
                _0x77b9xd7['style']['display'] = 'none';
                localStorage['setItem'](_0x77b9x4 + '-Last-Visited', 'Your last visit was ' + _0x77b9xda + ' at ' + _0x77b9xdb)
            } else {
                _0x77b9xd6['style']['display'] = 'none';
                _0x77b9xd7['style']['display'] = 'block';
                _0x77b9xd8['append'](_0x77b9xd9);
                localStorage['setItem'](_0x77b9x4 + '-Last-Visited', 'Your last visit was ' + _0x77b9xda + ' at ' + _0x77b9xdb)
            }
        };
        var _0x77b9xdc = document['querySelectorAll']('.reading-progress-text');
        if (_0x77b9xdc['length']) {
            var _0x77b9xdd = _0x77b9xdc[0]['innerHTML']['split'](' ')['length'];
            var _0x77b9xde = Math['floor'](_0x77b9xdd / 250);
            var _0x77b9xdf = _0x77b9xdd % 60;
            document['getElementsByClassName']('reading-progress-words')[0]['innerHTML'] = _0x77b9xdd;
            document['getElementsByClassName']('reading-progress-time')[0]['innerHTML'] = _0x77b9xde + ':' + _0x77b9xdf
        };
        var _0x77b9xe0 = document['querySelectorAll']('.text-size-changer');
        if (_0x77b9xe0['length']) {
            var _0x77b9xe1 = document['querySelectorAll']('.text-size-increase');
            var _0x77b9xe2 = document['querySelectorAll']('.text-size-decrease');
            var _0x77b9xe3 = document['querySelectorAll']('.text-size-default');
            _0x77b9xe1[0]['addEventListener']('click', function () {
                _0x77b9xe0[0]['querySelectorAll']('*')['forEach'](function (_0x77b9xe4) {
                    const _0x77b9xe5 = window['getComputedStyle'](_0x77b9xe4)['fontSize']['split']('px', 2)[0];
                    _0x77b9xe4['style']['fontSize'] = (+_0x77b9xe5 + 1) + 'px'
                })
            });
            _0x77b9xe2[0]['addEventListener']('click', function () {
                _0x77b9xe0[0]['querySelectorAll']('*')['forEach'](function (_0x77b9xe4) {
                    const _0x77b9xe5 = window['getComputedStyle'](_0x77b9xe4)['fontSize']['split']('px', 2)[0];
                    _0x77b9xe4['style']['fontSize'] = (+_0x77b9xe5 - 1) + 'px'
                })
            });
            _0x77b9xe3[0]['addEventListener']('click', function () {
                _0x77b9xe0[0]['querySelectorAll']('*')['forEach'](function (_0x77b9xe4) {
                    const _0x77b9xe5 = window['getComputedStyle'](_0x77b9xe4)['fontSize']['split']('px', 2)[0];
                    _0x77b9xe4['style']['fontSize'] = ''
                })
            })
        };
        var _0x77b9xe6 = document['querySelectorAll']('.qr-image');
        if (_0x77b9xe6['length']) {
            var _0x77b9xe7 = window['location']['href'];
            var _0x77b9xe8 = document['getElementsByClassName']('generate-qr-auto')[0];
            var _0x77b9xe9 = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
            if (_0x77b9xe8) {
                _0x77b9xe8['setAttribute']('src', _0x77b9xe9 + _0x77b9xe7)
            };
            var _0x77b9xea = document['getElementsByClassName']('generate-qr-button')[0];
            if (_0x77b9xea) {
                _0x77b9xea['addEventListener']('click', function () {
                    var _0x77b9xeb = document['getElementsByClassName']('qr-url')[0]['value'];
                    var _0x77b9xe9 = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
                    var _0x77b9xec = '<img class=\"mx-auto polaroid-effect shadow-l mt-4 delete-qr\" width=\"200\" src=\"' + _0x77b9xe9 + _0x77b9xeb + '\" alt=\"img\"><p class=\"font-11 text-center mb-0\">' + _0x77b9xeb + '</p>';
                    document['getElementsByClassName']('generate-qr-result')[0]['innerHTML'] = _0x77b9xec;
                    _0x77b9xea['innerHTML'] = 'Generate New Button'
                })
            }
        };
        if (window['location']['protocol'] === 'file:') {
            var _0x77b9xed = document['querySelectorAll']('a');
            _0x77b9xed['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('mouseover', (_0x77b9x71) => { })
            })
        };
        // var _0x77b9xee = document['querySelectorAll']('[data-search]');
        // if (_0x77b9xee['length']) {
        //     var _0x77b9xef = document['querySelectorAll']('.search-results');
        //     var _0x77b9xf0 = document['querySelectorAll']('.search-no-results');
        //     var _0x77b9xf1 = document['querySelectorAll']('.search-results div')[0]['childElementCount'];
        //     var _0x77b9xf2 = document['querySelectorAll']('.search-trending');

        //     function _0x77b9xf3() {
        //         var _0x77b9xf4 = _0x77b9xee[0]['value'];
        //         var _0x77b9xf5 = _0x77b9xf4['toLowerCase']();
        //         if (_0x77b9xf5 != '') {
        //             _0x77b9xef[0]['classList']['remove']('disabled-search-list');
        //             var _0x77b9xf6 = document['querySelectorAll']('[data-filter-item]');
        //             for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9xf6['length']; _0x77b9xa++) {
        //                 var _0x77b9xf7 = _0x77b9xf6[_0x77b9xa]['getAttribute']('data-filter-name');
        //                 if (_0x77b9xf7['includes'](_0x77b9xf5)) {
        //                     _0x77b9xf6[_0x77b9xa]['classList']['remove']('disabled');
        //                     if (_0x77b9xf2['length']) {
        //                         _0x77b9xf2[0]['classList']['add']('disabled')
        //                     }
        //                 } else {
        //                     _0x77b9xf6[_0x77b9xa]['classList']['add']('disabled');
        //                     if (_0x77b9xf2['length']) {
        //                         _0x77b9xf2[0]['classList']['remove']('disabled')
        //                     }
        //                 };
        //                 var _0x77b9xf8 = document['querySelectorAll']('.search-results div')[0]['getElementsByClassName']('disabled')['length'];
        //                 if (_0x77b9xf8 === _0x77b9xf1) {
        //                     _0x77b9xf0[0]['classList']['remove']('disabled');
        //                     if (_0x77b9xf2['length']) {
        //                         _0x77b9xf2[0]['classList']['add']('disabled')
        //                     }
        //                 } else {
        //                     _0x77b9xf0[0]['classList']['add']('disabled');
        //                     if (_0x77b9xf2['length']) {
        //                         _0x77b9xf2[0]['classList']['add']('disabled')
        //                     }
        //                 }
        //             }
        //         };
        //         if (_0x77b9xf5 === '') {
        //             _0x77b9xef[0]['classList']['add']('disabled-search-list');
        //             _0x77b9xf0[0]['classList']['add']('disabled');
        //             if (_0x77b9xf2['length']) {
        //                 _0x77b9xf2[0]['classList']['remove']('disabled')
        //             }
        //         }
        //     }
        //     _0x77b9xee[0]['addEventListener']('keyup', function () {
        //         _0x77b9xf3()
        //     });
        //     _0x77b9xee[0]['addEventListener']('click', function () {
        //         _0x77b9xf3()
        //     });
        //     var _0x77b9xf9 = document['querySelectorAll']('.search-trending a');
        //     _0x77b9xf9['forEach']((_0x77b9xc) => {
        //         return _0x77b9xc['addEventListener']('click', (_0x77b9x71) => {
        //             var _0x77b9xfa = _0x77b9xc['querySelectorAll']('span')[0]['textContent']['toLowerCase']();
        //             _0x77b9xee[0]['value'] = _0x77b9xfa;
        //             _0x77b9xee[0]['click']()
        //         })
        //     })
        // };

        // function _0x77b9xfb() {
        //     var _0x77b9xfc = document['querySelectorAll']('.shareToFacebook, .shareToTwitter, .shareToLinkedIn');
        //     if (_0x77b9xfc['length']) {
        //         var _0x77b9xfd = window['location']['href'];
        //         var _0x77b9xfe = document['title'];
        //         document['querySelectorAll']('.shareToFacebook')['forEach']((_0x77b9xff) => {
        //             return _0x77b9xff['setAttribute']('href', 'https://www.facebook.com/sharer/sharer.php?u=' + _0x77b9xfd)
        //         });
        //         document['querySelectorAll']('.shareToTwitter')['forEach']((_0x77b9xff) => {
        //             return _0x77b9xff['setAttribute']('href', 'https://twitter.com/share?text=' + _0x77b9xfd)
        //         });
        //         document['querySelectorAll']('.shareToPinterest')['forEach']((_0x77b9xff) => {
        //             return _0x77b9xff['setAttribute']('href', 'https://pinterest.com/pin/create/button/?url=' + _0x77b9xfd)
        //         });
        //         document['querySelectorAll']('.shareToWhatsApp')['forEach']((_0x77b9xff) => {
        //             return _0x77b9xff['setAttribute']('href', 'whatsapp://send?text=' + _0x77b9xfd)
        //         });
        //         document['querySelectorAll']('.shareToMail')['forEach']((_0x77b9xff) => {
        //             return _0x77b9xff['setAttribute']('href', 'mailto:?body=' + _0x77b9xfd)
        //         });
        //         document['querySelectorAll']('.shareToLinkedIn')['forEach']((_0x77b9xff) => {
        //             return _0x77b9xff['setAttribute']('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + _0x77b9xfd + '&title=' + _0x77b9xfe + '&summary=&source=')
        //         })
        //     }
        // }
        // var _0x77b9x100 = document['querySelectorAll']('.contact-form');
        // if (_0x77b9x100['length']) {
        //     var _0x77b9x101 = document['getElementById']('contactForm');
        //     _0x77b9x101['onsubmit'] = function (_0x77b9xb) {
        //         _0x77b9xb['preventDefault']();
        //         var _0x77b9x102 = document['getElementById']('contactNameField');
        //         var _0x77b9x103 = document['getElementById']('contactEmailField');
        //         var _0x77b9x104 = document['getElementById']('contactMessageTextarea');
        //         var _0x77b9x105 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        //         if (_0x77b9x102['value'] === '') {
        //             _0x77b9x101['setAttribute']('data-form', 'invalid');
        //             _0x77b9x102['classList']['add']('border-red-dark');
        //             document['getElementById']('validator-name')['classList']['remove']('disabled')
        //         } else {
        //             _0x77b9x101['setAttribute']('data-form', 'valid');
        //             document['getElementById']('validator-name')['classList']['add']('disabled');
        //             _0x77b9x102['classList']['remove']('border-red-dark')
        //         };
        //         if (_0x77b9x103['value'] === '') {
        //             _0x77b9x101['setAttribute']('data-form', 'invalid');
        //             _0x77b9x103['classList']['add']('border-red-dark');
        //             document['getElementById']('validator-mail1')['classList']['remove']('disabled')
        //         } else {
        //             document['getElementById']('validator-mail1')['classList']['add']('disabled');
        //             if (!_0x77b9x105['test'](_0x77b9x103['value'])) {
        //                 _0x77b9x101['setAttribute']('data-form', 'invalid');
        //                 _0x77b9x103['classList']['add']('border-red-dark');
        //                 document['getElementById']('validator-mail2')['classList']['remove']('disabled')
        //             } else {
        //                 _0x77b9x101['setAttribute']('data-form', 'valid');
        //                 document['getElementById']('validator-mail2')['classList']['add']('disabled');
        //                 _0x77b9x103['classList']['remove']('border-red-dark')
        //             }
        //         };
        //         if (_0x77b9x104['value'] === '') {
        //             _0x77b9x101['setAttribute']('data-form', 'invalid');
        //             _0x77b9x104['classList']['add']('border-red-dark');
        //             document['getElementById']('validator-text')['classList']['remove']('disabled')
        //         } else {
        //             _0x77b9x101['setAttribute']('data-form', 'valid');
        //             document['getElementById']('validator-text')['classList']['add']('disabled');
        //             _0x77b9x104['classList']['remove']('border-red-dark')
        //         };
        //         if (_0x77b9x101['getAttribute']('data-form') === 'valid') {
        //             document['querySelectorAll']('.form-sent')[0]['classList']['remove']('disabled');
        //             document['querySelectorAll']('.contact-form')[0]['classList']['add']('disabled');
        //             var _0x77b9x106 = {};
        //             for (let _0x77b9xa = 0, _0x77b9x107 = _0x77b9x101['length']; _0x77b9xa < _0x77b9x107; ++_0x77b9xa) {
        //                 let _0x77b9x108 = _0x77b9x101[_0x77b9xa];
        //                 if (_0x77b9x108['name']) {
        //                     _0x77b9x106[_0x77b9x108['name']] = _0x77b9x108['value']
        //                 }
        //             };
        //             var _0x77b9x109 = new XMLHttpRequest();
        //             _0x77b9x109['open'](_0x77b9x101['method'], _0x77b9x101['action'], true);
        //             _0x77b9x109['setRequestHeader']('Accept', 'application/json; charset=utf-8');
        //             _0x77b9x109['setRequestHeader']('Content-Type', 'application/json; charset=UTF-8');
        //             _0x77b9x109['send'](JSON['stringify'](_0x77b9x106));
        //             _0x77b9x109['onloadend'] = function (_0x77b9x10a) {
        //                 if (_0x77b9x10a['target']['status'] === 200) {
        //                     console['log']('Form Submitted')
        //                 }
        //             }
        //         }
        //     }
        // };
        var _0x77b9x10b = document['querySelectorAll']('[data-bs-toggle=\"collapse\"]:not(.no-effect)');
        if (_0x77b9x10b['length']) {
            _0x77b9x10b['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                    if (_0x77b9xc['querySelectorAll']('i')['length']) {
                        _0x77b9xc['querySelector']('i')['classList']['toggle']('fa-rotate-180')
                    }
                })
            })
        };
        var _0x77b9x10c = document['querySelectorAll']('.tab-controls a');
        if (_0x77b9x10c['length']) {
            _0x77b9x10c['forEach'](function (_0x77b9xb) {
                if (_0x77b9xb['hasAttribute']('data-active')) {
                    var _0x77b9x10d = _0x77b9xb['parentNode']['getAttribute']('data-highlight');
                    _0x77b9xb['classList']['add'](_0x77b9x10d);
                    _0x77b9xb['classList']['add']('no-click')
                }
            });
            _0x77b9x10c['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                    var _0x77b9x10d = _0x77b9xc['parentNode']['getAttribute']('data-highlight');
                    var _0x77b9x10e = _0x77b9xc['parentNode']['querySelectorAll']('a');
                    _0x77b9x10e['forEach'](function (_0x77b9xb) {
                        _0x77b9xb['classList']['remove'](_0x77b9x10d);
                        _0x77b9xb['classList']['remove']('no-click')
                    });
                    _0x77b9xc['classList']['add'](_0x77b9x10d);
                    _0x77b9xc['classList']['add']('no-click')
                })
            })
        };
        var _0x77b9x110 = document['querySelectorAll']('[data-auto-activate]');
        if (_0x77b9x110['length']) {
            var _0x77b9x111 = _0x77b9x110[0]['getAttribute']('data-auto-activate');
            var _0x77b9x112 = _0x77b9x111 * 1000;
            setTimeout(function () {
                _0x77b9x110[0]['classList']['add']('menu-active');
                _0x77b9xd[0]['classList']['add']('menu-active')
            }, _0x77b9x112)
        };
        var _0x77b9x121 = document['querySelectorAll']('[data-menu-load]');
        _0x77b9x121['forEach'](function (_0x77b9xb) {
            var _0x77b9x122 = _0x77b9xb['getAttribute']('data-menu-load');
            fetch(_0x77b9x122)['then']((_0x77b9x106) => {
                return _0x77b9x106['text']()
            })['then']((_0x77b9x123) => {
                return _0x77b9xb['innerHTML'] = _0x77b9x123
            })['then']((_0x77b9x106) => {
                setTimeout(function () {
                    if (_0x77b9x121[_0x77b9x121['length'] - 1] === _0x77b9xb) {
                        _0x77b9x32();
                        _0x77b9x62();
                        _0x77b9x43();
                        // _0x77b9xfb();
                        _0x77b9x59();
                        _0x77b9x57();
                        _0x77b9x4e();
                        _0x77b9x47()
                    }
                }, 500)
            })
        });
        let _0x77b9x124 = {
            Android: function () {
                return navigator['userAgent']['match'](/Android/i)
            },
            iOS: function () {
                return navigator['userAgent']['match'](/iPhone|iPad|iPod/i)
            },
            any: function () {
                return (_0x77b9x124.Android() || _0x77b9x124['iOS']())
            }
        };
        const _0x77b9x125 = document['getElementsByClassName']('show-android');
        const _0x77b9x126 = document['getElementsByClassName']('show-ios');
        const _0x77b9x127 = document['getElementsByClassName']('show-no-device');
        if (!_0x77b9x124['any']()) {
            for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x126['length']; _0x77b9xa++) {
                _0x77b9x126[_0x77b9xa]['classList']['add']('disabled')
            };
            for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x125['length']; _0x77b9xa++) {
                _0x77b9x125[_0x77b9xa]['classList']['add']('disabled')
            }
        };
        if (_0x77b9x124['iOS']()) {
            document['querySelectorAll']('#page')[0]['classList']['add']('device-is-ios');
            for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x127['length']; _0x77b9xa++) {
                _0x77b9x127[_0x77b9xa]['classList']['add']('disabled')
            };
            for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x125['length']; _0x77b9xa++) {
                _0x77b9x125[_0x77b9xa]['classList']['add']('disabled')
            }
        };
        if (_0x77b9x124.Android()) {
            document['querySelectorAll']('#page')[0]['classList']['add']('device-is-android');
            for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x126['length']; _0x77b9xa++) {
                _0x77b9x126[_0x77b9xa]['classList']['add']('disabled')
            };
            for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x127['length']; _0x77b9xa++) {
                _0x77b9x127[_0x77b9xa]['classList']['add']('disabled')
            }
        };
        var _0x77b9x128 = document['querySelectorAll']('.offline-message');
        if (!_0x77b9x128['length']) {
            const _0x77b9x129 = document['createElement']('p');
            const _0x77b9x12a = document['createElement']('p');
            _0x77b9x129['className'] = 'offline-message bg-red-dark color-white';
            _0x77b9x129['textContent'] = 'No internet connection detected';
            _0x77b9x12a['className'] = 'online-message bg-green-dark color-white';
            _0x77b9x12a['textContent'] = 'You are back online';
            document['getElementsByTagName']('body')[0]['appendChild'](_0x77b9x129);
            document['getElementsByTagName']('body')[0]['appendChild'](_0x77b9x12a)
        };

        function _0x77b9x12b() {
            var _0x77b9x12c = document['querySelectorAll']('a');
            _0x77b9x12c['forEach'](function (_0x77b9xb) {
                var _0x77b9x12d = _0x77b9xb['getAttribute']('href');
                if (_0x77b9x12d['match'](/.html/)) {
                    _0x77b9xb['classList']['add']('show-offline');
                    _0x77b9xb['setAttribute']('data-link', _0x77b9x12d);
                    _0x77b9xb['setAttribute']('href', '#')
                }
            });
            var _0x77b9x12e = document['querySelectorAll']('.show-offline');
            _0x77b9x12e['forEach']((_0x77b9xc) => {
                return _0x77b9xc['addEventListener']('click', (_0x77b9x71) => {
                    document['getElementsByClassName']('offline-message')[0]['classList']['add']('offline-message-active');
                    setTimeout(function () {
                        document['getElementsByClassName']('offline-message')[0]['classList']['remove']('offline-message-active')
                    }, 1500)
                })
            })
        }

        // function _0x77b9x12f() {
        //     var _0x77b9x130 = document['querySelectorAll']('[data-link]');
        //     _0x77b9x130['forEach'](function (_0x77b9xb) {
        //         var _0x77b9x12d = _0x77b9xb['getAttribute']('data-link');
        //         if (_0x77b9x12d['match'](/.html/)) {
        //             _0x77b9xb['setAttribute']('href', _0x77b9x12d);
        //             _0x77b9xb['removeAttribute']('data-link', '')
        //         }
        //     })
        // }
        var _0x77b9x131 = document['getElementsByClassName']('offline-message')[0];
        var _0x77b9x132 = document['getElementsByClassName']('online-message')[0];

        function _0x77b9x133() {
            _0x77b9x12f();
            _0x77b9x132['classList']['add']('online-message-active');
            setTimeout(function () {
                _0x77b9x132['classList']['remove']('online-message-active')
            }, 2000);
            console['info']('Connection: Online')
        }

        function _0x77b9x134() {
            _0x77b9x12b();
            _0x77b9x131['classList']['add']('offline-message-active');
            setTimeout(function () {
                _0x77b9x131['classList']['remove']('offline-message-active')
            }, 2000);
            console['info']('Connection: Offline')
        }
        var _0x77b9x135 = document['querySelectorAll']('.simulate-offline');
        var _0x77b9x136 = document['querySelectorAll']('.simulate-online');
        if (_0x77b9x135['length']) {
            _0x77b9x135[0]['addEventListener']('click', function () {
                _0x77b9x134()
            });
            _0x77b9x136[0]['addEventListener']('click', function () {
                _0x77b9x133()
            })
        };

        function _0x77b9x137(_0x77b9x71) {
            var _0x77b9x138 = navigator['onLine'] ? 'online' : 'offline';
            _0x77b9x133()
        }

        function _0x77b9x139(_0x77b9x71) {
            _0x77b9x134()
        }
        window['addEventListener']('online', _0x77b9x137);
        window['addEventListener']('offline', _0x77b9x139);
        const _0x77b9x13a = document['querySelectorAll']('.simulate-iphone-badge');
        _0x77b9x13a['forEach']((_0x77b9xc) => {
            return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                document['getElementsByClassName']('add-to-home')[0]['classList']['add']('add-to-home-visible', 'add-to-home-ios');
                document['getElementsByClassName']('add-to-home')[0]['classList']['remove']('add-to-home-android')
            })
        });
        const _0x77b9x13b = document['querySelectorAll']('.simulate-android-badge');
        _0x77b9x13b['forEach']((_0x77b9xc) => {
            return _0x77b9xc['addEventListener']('click', (_0x77b9xb) => {
                document['getElementsByClassName']('add-to-home')[0]['classList']['add']('add-to-home-visible', 'add-to-home-android');
                document['getElementsByClassName']('add-to-home')[0]['classList']['remove']('add-to-home-ios')
            })
        });
        if (_0x77b9x6 === true) {
            caches['delete']('workbox-runtime')['then'](function () { });
            sessionStorage['clear']();
            caches['keys']()['then']((_0x77b9x147) => {
                _0x77b9x147['forEach']((_0x77b9x148) => {
                    caches['delete'](_0x77b9x148)
                })
            })
        };
        var _0x77b9x14e = 'plugins/';
        let _0x77b9x14f = [{
            id: 'uniqueID',
            plug: 'pluginName/plugin.js',
            call: 'pluginName/pluginName-call.js',
            style: 'pluginName/pluginName-style.css',
            trigger: '.pluginTriggerClass'
        }, {
            id: 'chart',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-charts.js',
            trigger: '.chart'
        }, {
            id: 'chart',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-wallet.js',
            trigger: '.wallet-chart'
        }, {
            id: 'chart',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-dashboard.js',
            trigger: '.dashboard-chart'
        }, {
            id: 'graph',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-graphs.js',
            trigger: '.graph'
        }, {
            id: 'count',
            plug: 'countdown/countdown.js',
            trigger: '.countdown'
        }, {
            id: 'filter',
            plug: 'filterizr/filterizr.js',
            call: 'filterizr/filterizr-call.js',
            style: 'filterizr/filterizr.css',
            trigger: '.gallery-filter'
        }, {
            id: 'embedly',
            plug: 'embedly/embedly.js',
            trigger: '.embedly-card'
        }];
        for (let _0x77b9xa = 0; _0x77b9xa < _0x77b9x14f['length']; _0x77b9xa++) {
            if (document['querySelectorAll']('.' + _0x77b9x14f[_0x77b9xa]['id'] + '-c')['length']) {
                document['querySelectorAll']('.' + _0x77b9x14f[_0x77b9xa]['id'] + '-c')[0]['remove']()
            };
            var _0x77b9x150 = document['querySelectorAll'](_0x77b9x14f[_0x77b9xa]['trigger']);
            if (_0x77b9x150['length']) {
                var _0x77b9x151 = document['getElementsByTagName']('script')[1],
                    _0x77b9x152 = document['createElement']('script');
                _0x77b9x152['type'] = 'text/javascript';
                _0x77b9x152['className'] = _0x77b9x14f[_0x77b9xa]['id'] + '-p';
                _0x77b9x152['src'] = _0x77b9x14e + _0x77b9x14f[_0x77b9xa]['plug'];
                _0x77b9x152['addEventListener']('load', function () {
                    if (_0x77b9x14f[_0x77b9xa]['call'] !== undefined) {
                        var _0x77b9x153 = document['getElementsByTagName']('script')[2],
                            _0x77b9x154 = document['createElement']('script');
                        _0x77b9x154['type'] = 'text/javascript';
                        _0x77b9x154['className'] = _0x77b9x14f[_0x77b9xa]['id'] + '-c';
                        _0x77b9x154['src'] = _0x77b9x14e + _0x77b9x14f[_0x77b9xa]['call'];
                        _0x77b9x153['parentNode']['insertBefore'](_0x77b9x154, _0x77b9x153)
                    }
                });
                if (!document['querySelectorAll']('.' + _0x77b9x14f[_0x77b9xa]['id'] + '-p')['length']) {
                    _0x77b9x151['parentNode']['insertBefore'](_0x77b9x152, _0x77b9x151)
                } else {
                    setTimeout(function () {
                        var _0x77b9x151 = document['getElementsByTagName']('script')[1],
                            _0x77b9x152 = document['createElement']('script');
                        _0x77b9x152['type'] = 'text/javascript';
                        _0x77b9x152['className'] = _0x77b9x14f[_0x77b9xa]['id'] + '-c';
                        _0x77b9x152['src'] = _0x77b9x14e + _0x77b9x14f[_0x77b9xa]['call'];
                        _0x77b9x151['parentNode']['insertBefore'](_0x77b9x152, _0x77b9x151)
                    }, 50)
                };
                if (_0x77b9x14f[_0x77b9xa]['style'] !== undefined) {
                    if (!document['querySelectorAll']('.' + _0x77b9x14f[_0x77b9xa]['id'] + '-s')['length']) {
                        var _0x77b9x155 = document['createElement']('link');
                        _0x77b9x155['className'] = _0x77b9x14f[_0x77b9xa]['id'] + '-s';
                        _0x77b9x155['rel'] = 'stylesheet';
                        _0x77b9x155['type'] = 'text/css';
                        _0x77b9x155['href'] = _0x77b9x14e + _0x77b9x14f[_0x77b9xa]['style'];
                        document['getElementsByTagName']('head')[0]['appendChild'](_0x77b9x155)
                    }
                }
            }
        }
    }
    if ('scrollRestoration' in window['history']) {
        window['history']['scrollRestoration'] = 'manual'
    };
    // if (_0x77b9x3 === true) {
    //     // if (window['location']['protocol'] !== 'file:') {
    //     //     const _0x77b9x156 = {
    //     //         containers: ['#page'],
    //     //         cache: false,
    //     //         animateHistoryBrowsing: false,
    //     //         plugins: [new SwupPreloadPlugin()],
    //     //         linkSelector: 'a:not(.external-link):not(.default-link):not([href^=\"https\"]):not([href^=\"http\"]):not([data-gallery])'
    //     //     };
    //     //     const _0x77b9x157 = new Swup(_0x77b9x156);
    //     //     document['addEventListener']('swup:pageView', (_0x77b9xb) => {
    //     //         _0x77b9x9()
    //     //     })
    //     // }
    // };
    _0x77b9x9()
})