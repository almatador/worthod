@REM @echo off

@REM :: تعريف الخدمات كأسماء بدون علامات اقتباس إضافية
@REM set services=Designing Website store;Website Design;Application Design;Web Hosting;SEO Optimization;Dashboard Design;Social Media Marketing;Cybersecurity

@REM :: مكان إنشاء المجلدات والملفات
@REM set baseDir=src/pages

@REM :: حلقة لإنشاء المجلدات والملفات
@REM for %%s in (%services%) do (
@REM     setlocal enabledelayedexpansion
@REM     set serviceName=%%s

@REM     :: استبدال المسافات بشرطة سفلية (_) في أسماء المجلدات
@REM     set folderName=!serviceName: =_!

@REM     :: إنشاء المجلد
@REM     mkdir "%baseDir%\!folderName!"

@REM     :: إنشاء الملف داخل المجلد
@REM     echo import React from "react"; > "%baseDir%\!folderName!\!folderName!.jsx"
@REM     echo const !folderName! = () => { return (<div>!serviceName!</div>); }; >> "%baseDir%\!folderName!\!folderName!.jsx"
@REM     echo export default !folderName!; >> "%baseDir%\!folderName!\!folderName!.jsx"

@REM     endlocal
@REM )

@REM echo All services created successfully
@REM pause
