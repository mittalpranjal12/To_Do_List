#include<stdio.h>
#include<conio.h>

int main()
{
    int n, array[50], i;
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    printf("\nEnter the elements in array: ");
        for(i = 0; i<n; i++)
        {
            scanf("%d", &array[i]);
        }
    printf("The array is:");
        for(i=0; i <n; i++)
        {
            printf("\n%d", array[i]);
        }
return 0;
}