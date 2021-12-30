from skimage.io import imread, imsave
from skimage.color import rgb2gray, gray2rgb, label2rgb
import matplotlib.pyplot as plt
from matplotlib import cm
from skimage.filters import sobel, threshold_otsu
import sys



def otsuImageSegmentation(image):
    image =  rgb2gray(imread(image)) #data.camera()
    thresh = threshold_otsu(image)
    binary = image > thresh
    plt.imsave('picture.jpg',binary,cmap =plt.cm.gray)

otsuImageSegmentation(sys.argv[1])
