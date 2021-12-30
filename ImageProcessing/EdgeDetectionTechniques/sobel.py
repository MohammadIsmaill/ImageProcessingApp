import cv2
import numpy as np
import sys

def sobelEdgeDetection(image):
    img = cv2.imread(image)
    gray =cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    img_guassian = cv2.GaussianBlur(gray,(3,3),0)
    img_sobelx = cv2.Sobel(img_guassian,cv2.CV_8U,1,0,ksize = 5)
    img_sobely = cv2.Sobel(img_guassian,cv2.CV_8U,0,1,ksize = 5)
    img_sobel = img_sobelx + img_sobely
    cv2.imwrite('picture.jpg',img_sobel)

sobelEdgeDetection(sys.argv[1])
