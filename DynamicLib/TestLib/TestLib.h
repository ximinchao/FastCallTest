#ifndef _TEST_LIB_H_
#define _TEST_LIB_H_

#if (defined(_WIN32) && defined(_USRDLL))
#define TESTLIB_API	__declspec(dllexport)
#else //_WIN32
#define TESTLIB_API
#endif //_WIN32

#ifdef __cplusplus
extern "C"
{
#endif

	int TESTLIB_API TestAdd(int a, int b);

#ifdef __cplusplus
};
#endif
#endif //_TEST_LIB_H_
