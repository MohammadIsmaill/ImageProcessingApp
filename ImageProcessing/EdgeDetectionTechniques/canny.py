import cv2
import numpy as np
import sys

def cannyEdgeDetection(image):
    img = cv2.imread(image,0)
    cv2.imwrite('picture.jpg',cv2.Canny(img,200,300))

# print(sys.argv[1])
cannyEdgeDetection(sys.argv[1])
