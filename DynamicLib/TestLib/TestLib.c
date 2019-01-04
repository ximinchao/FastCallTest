#include "TestLib.h"

#ifdef _WIN32
#include <windows.h>
#endif //_WIN32

int TESTLIB_API TestAdd(int a, int b) {

#ifdef _WIN32
	Sleep(2000);
#endif //_WIN32

	return a + b;
}