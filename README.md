DEMO TO REPRODUCE CCA ISSUE WITH ANDROID IMAGES
===============================================

Steps to recreate issue
-----------------------

Run the following steps with cca 0.0.8, and then with cca 0.0.9

1. cca platform remove android
2. rm -Rf plugins/org.*
3. cca platform add android
4. ./initialize.sh
5. cca run android

With 0.0.8 you should see my github avatar on the android screen.  In version 0.0.9 it will be blank.
