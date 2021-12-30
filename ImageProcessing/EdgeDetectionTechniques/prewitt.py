import cv2
import numpy as np
import sys

def prewittEdgeDetection(image):
    img = cv2.imread(image)
    gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    img_guassian = cv2.GaussianBlur(gray,(3,3),0)
    kernelx = np.array([[1,1,1],[0,0,0],[-1,-1,-1]])
    kernely = np.array([[-1,0,1],[-1,0,1],[-1,0,1]])
    img_prewittx = cv2.filter2D(img_guassian,-1,kernelx)
    img_prewitty = cv2.filter2D(img_guassian,-1,kernely)
    cv2.imwrite('picture.jpg',img_prewittx + img_prewitty)



prewittEdgeDetection(sys.argv[1]);
