# Big O

Describes an upper bound on the time. An algorithm that prints all the values in an array could be described as O(N)


# Big Omega

The equivalent concept but for lower bound. 


# Big theta

Means both big O and big Omega, That is an lgorithm is theta(N) if it is both O(N) and Omega(N)


## Three Cases

Best Case O(N)
Worst Case O(N^2)
Expected Case O(N log N )

Recursive function Big(O)

```
              f(4)
            f(3)  f(3)
       f(2)  f(2)  f(2) f(2)
f(1)  f(1)  f(1)  f(1)  f(1)  f(1)
```

O(branches^depth)     ---- two branches, depth is (N = 4)  -> O(2^N)

