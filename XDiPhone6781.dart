import 'package:flutter/material.dart';
import './XDiPhone6782.dart';
import 'package:adobe_xd/page_link.dart';

class XDiPhone6781 extends StatelessWidget {
  XDiPhone6781({
    Key key,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xffe2b289),
      body: Stack(
        children: <Widget>[
          Transform.translate(
            offset: Offset(38.0, 36.0),
            child: Container(
              width: 297.0,
              height: 66.0,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(33.0),
                color: const Color(0xff6e6464),
                border: Border.all(width: 1.0, color: const Color(0xff707070)),
              ),
            ),
          ),
          Transform.translate(
            offset: Offset(139.0, 56.0),
            child: Text(
              'viralbaba',
              style: TextStyle(
                fontFamily: 'Segoe UI',
                fontSize: 20,
                color: const Color(0xffbeb2b2),
                fontWeight: FontWeight.w700,
              ),
              textAlign: TextAlign.left,
            ),
          ),
          Transform.translate(
            offset: Offset(77.0, 510.0),
            child: PageLink(
              links: [
                PageLinkInfo(
                  transition: LinkTransition.SlideLeft,
                  ease: Curves.easeOut,
                  duration: 0.3,
                  pageBuilder: () => XDiPhone6782(),
                ),
              ],
              child: Container(
                width: 226.0,
                height: 109.0,
                decoration: BoxDecoration(
                  color: const Color(0xff6e6464),
                  border:
                      Border.all(width: 1.0, color: const Color(0xff707070)),
                ),
              ),
            ),
          ),
          Transform.translate(
            offset: Offset(134.0, 532.0),
            child: Text(
              '    START \nEXPIORING',
              style: TextStyle(
                fontFamily: 'Segoe UI',
                fontSize: 20,
                color: const Color(0xffc6baba),
                fontWeight: FontWeight.w700,
              ),
              textAlign: TextAlign.left,
            ),
          ),
          Transform.translate(
            offset: Offset(88.0, 200.0),
            child:
                // Adobe XD layer: 'bf46df66-4375-4bcf-…' (shape)
                Container(
              width: 200.0,
              height: 200.0,
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: const AssetImage(''),
                  fit: BoxFit.fill,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
