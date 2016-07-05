#!/usr/bin/env Rscript
samples = read.csv('stdin')

# by default levels for string factor is alphabetical
# but we want experiment to be x
samples$set <- relevel(samples$set, ref = "experiment")

# test whether the true location of the distribution is shifted
# does not require data to be normally distributed
wilcox.test(µs ~ set, data=samples, conf.int=TRUE)

svg(file = "boxplot.svg")
boxplot(µs ~ set, data=samples)
dev.off()

require(lattice)
svg(file = "histogram.svg")
histogram(~µs | set, data=samples, breaks=nclass.FD)
dev.off()
