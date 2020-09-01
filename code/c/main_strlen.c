#include <stdio.h>

int _strlen(char *s);

int main(void)
{
    char *s = "Hello";
    printf("Length of %s: %d\n", s, _strlen(s));
    return (0);
}
