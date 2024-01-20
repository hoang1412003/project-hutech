#include <stdio.h>
// Hàm gop mang
void mergeArrays(int* A, int* B, int* mergedArray, int m, int n) {
 int i, j, k;
 i = j = k = 0;
 
 while (i < m && j < n) {
   if (A[i] <= B[j]) {
     mergedArray[k++] = A[i++];
   } else {
     mergedArray[k++] = B[j++];
   }
 }
 
 while (i < m) {
   mergedArray[k++] = A[i++];
 }
 
 while (j < n) {
   mergedArray[k++] = B[j++];
 }
}
 
// Hàm sap xep
void insertionSort(int arr[], int n) {
 int i, key, j;
 for (i = 1; i < n; i++) {
   key = arr[i];
   j = i - 1;
 
   while (j >= 0 && arr[j] > key) {
     arr[j + 1] = arr[j];
     j = j - 1;
   }
   arr[j + 1] = key;
 }
}
 
int main() {
​ FILE *inputFile, *outputFile;
 int A[100], B[100], mergedArray[200];
 int m, n, i;
  // Mo file input
 inputFile = fopen("input.txt","r");
if (inputFile == NULL) {
   printf("Khong the mo file input.\n");
   return 1;
 }
 
 
  // Đoc kich thuoc mang A va B tu file
 
 fscanf(inputFile, "%d", &m);
 fscanf(inputFile, "%d", &n);
 
 
 // Đoc gia tri mang A tu file
 for (i = 0; i < m; i++) {
   fscanf(inputFile, "%d", &A[i]);
 }
 
 // Đoc gia tri mang B tu file
 for (i = 0; i < n; i++) {
   fscanf(inputFile, "%d", &B[i]);
 }
 
 // Đong file intput
 fclose(inputFile);
 
 // Gop va sap xep mang
 mergeArrays(A, B, mergedArray, m, n);
 insertionSort(mergedArray, m+n);
  // Mo file output
 outputFile = fopen("output.txt", "w");
 if (outputFile == NULL) {
   printf("Khong the mo file output.\n");
   return 1;
 }
 
 
 // In mang da sap xep
 for (i = 0; i < m + n; i++) {
   printf("%d ", mergedArray[i]);
   fprintf(outputFile, "%d ", mergedArray[i]);
 }
// Đóng file output
 fclose(outputFile);
 return 0;
}