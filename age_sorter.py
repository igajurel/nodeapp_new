#usecase
# 3,2,1,4,6
# 3,2<---------->1,4,6

# i=0,j=0
# is 3<=1, no
# a[k]=a[0]=1; i=0,j=1

# is 3<=4, yes
# a[k]=a[1]=3; i=1,j=1

# is 2<=4, yes
# a[k]=a[2]=2; i=1 (max-cap),j=1

# is 4, yes
# a[k]=a[3]=4; j=2

# is 6, yes
# a[k]=a[4]=6; j=2 (max-cap)

def sortuserages(input_list):
	#input_list = [3,2,7,6,4]
	#print(input_list)
	if(len(input_list)>=1):
		#input_list = input_list
		size_orig_array = len(input_list)
		mid_orig_array = len(input_list)/2
		left_array = input_list[0:int(mid_orig_array)]
		right_array = input_list[int(mid_orig_array):size_orig_array]
		#print("#############")
		#print(input_list)
		#print(left_array)
		#print(right_array)

		if(len(left_array))>1:
			sortuserages(left_array)	
		if(len(right_array))>1:
			sortuserages(right_array)
		
		#splitter section

		#merger section
		left_index = 0
		right_index = 0
		main_index = 0
		#input_list = []
		while(left_index<len(left_array) and right_index<len(right_array)):
			#print("==========")
			#print(left_index)
			#print(right_index)
			if(left_array[left_index] < right_array[right_index]):
				input_list[main_index]=left_array[left_index]
				left_index = left_index+1
			else:
				input_list[main_index]=right_array[right_index]
				#input_list.append(right_array[right_index])
				right_index = right_index+1
			main_index = main_index+1


		while(left_index<(len(left_array))):
			#print("***=======")
			#print(left_index)
			input_list[main_index]=left_array[left_index]
			left_index = left_index+1
			main_index = main_index+1


		while(right_index<(len(right_array))):
			#print("=======***")
			#print(right_index)
			input_list[main_index]=right_array[right_index]
			right_index = right_index+1
			main_index = main_index+1


		#print("----Sorted List Below----")
		print(input_list)

	return None

import sys

print('Input to python file is=>',sys.argv[1:])

inp_list = []

for v in sys.argv[1:]:
	item = int(v)
	inp_list.append(item)
	
sortuserages(inp_list)