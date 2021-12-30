from skimage.io import imread
from skimage.segmentation import felzenszwalb, slic, quickshift, watershed
from skimage.segmentation import mark_boundaries, find_boundaries
from skimage.util import img_as_float
import numpy as np
from matplotlib import cm
import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap
import sys
def felzenszwalbImageSegmentation(image):
    img = img_as_float(imread(image)[::2, ::2, :3])
    segments_fz = felzenszwalb(img, scale=100, sigma=0.5, min_size=100) #300
    borders = find_boundaries(segments_fz)
    unique_colors = np.unique(segments_fz.ravel())
    segments_fz[borders] = -1 #len(unique_colors)
    colors = [np.zeros(3)]
    for color in unique_colors:
        colors.append(np.mean(img[segments_fz == color], axis=0))
    cm = LinearSegmentedColormap.from_list('pallete', colors, N=len(colors))
    plt.imsave('picture.jpg',segments_fz,cmap=cm)

felzenszwalbImageSegmentation(sys.argv[1])
