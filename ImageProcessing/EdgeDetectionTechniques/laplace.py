
from PIL import Image
from skimage.io import imread, imshow, show
import scipy.fftpack as fp
from scipy import ndimage, misc, signal
# from scipy.stats import signaltonoise
from skimage import data, img_as_float
from skimage.color import rgb2gray
from skimage.transform import rescale
import matplotlib.pylab as pylab
# import matplotlib.pyplot as plt
import numpy as np
import numpy.fft
import timeit

import sys

def laplaceEdgeDetection(image):
    im = rgb2gray(imread(image)).astype(float)
    blur_box_kernel = np.ones((3,3)) / 9
    edge_laplace_kernel = np.array([[0,1,0],[1,-4,1],[0,1,0]])
    im_blurred = signal.convolve2d(im,blur_box_kernel)
    im_edges = np.clip(signal.convolve2d(im,edge_laplace_kernel),0,1)
    pylab.imsave('picture.jpg',im_edges,cmap = pylab.cm.gray)
laplaceEdgeDetection(sys.argv[1])
