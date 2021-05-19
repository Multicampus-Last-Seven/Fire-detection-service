#!/usr/bin/env python
from importlib import import_module
import os
from flask import Flask, render_template, Response
import detect

# import camera driver
#if os.environ.get('CAMERA'):
#    Camera = import_module('camera_' + os.environ['CAMERA']).Camera
#else:
#    from camera import Camera

# Raspberry Pi camera module (requires picamera package)
# from camera_pi import Camera

app = Flask(__name__)


@app.route('/')
def index():
    """Video streaming home page."""
    return render_template('index.html')


@app.route('/video_feed')
def video_feed():
    opt = ''
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(detect.detect(opt))


if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True)
