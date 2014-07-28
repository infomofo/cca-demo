DEMO TO REPRODUCE CCA ISSUE WITH ANDROID IMAGES
===============================================

This repo was created to demo an issue introduced in cca version 0.0.9.  It was resolved in version 0.2.2 but I am keeping the repo for posterity and to test future versions of cca as necessary.

Steps to recreate issue
-----------------------

Run the following steps with cca 0.0.8, and then with cca 0.0.9

1. cca platform remove android
2. rm -Rf plugins/org.*
3. cca platform add android
4. ./initialize.sh
5. cca run android

With 0.0.8 you should see my github avatar on the android screen.  In version 0.0.9 it will be blank.
